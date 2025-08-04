import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from '../../database/prisma';
import { AppError } from '../../middleware/errorHandler';
import { sendEmail } from '../email/email.service';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

const formatAnswer = (answer: any): string => {
    if (answer === 'N/A' || answer === null || answer === undefined) return 'N/A';
    if (Array.isArray(answer)) return answer.join(', ');
    if (typeof answer === 'object') {
        return Object.entries(answer)
            .filter(([, value]) => value)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
    }
    return String(answer);
}

export async function analyzeSubmission(submissionId: string) {
    const submission = await prisma.submission.findUnique({
        where: { id: submissionId },
        include: {
            formVersion: {
                include: {
                    emailNotification: true,
                },
            },
        },
    });

    if (!submission || !submission.formVersion.aiEnabled) {
        console.log(`AI analysis skipped for submission ${submissionId}`);
        return;
    }

    await prisma.submission.update({
        where: { id: submissionId },
        data: { aiAnalysisStatus: 'PROCESSING' },
    });

    try {
        const { formVersion, data: submissionData } = submission;
        const blocks = formVersion.blocks as any[];
        
        const formattedBlocks = blocks
            .sort((a, b) => a.order - b.order)
            .filter(block => block.type !== 'MARKDOWN_TEXT') // Exclude markdown blocks from analysis
            .map(block => {
                const answerData = (submissionData as any)?.[block.id];
                const answer = answerData?.value ?? 'N/A';
                const properties = block.properties as { label?: string, aiNote?: string };
                const question = properties?.label || 'Unnamed Question';
                const aiNote = properties?.aiNote || '';

                const rule = aiNote 
                    ? `ADMINISTRATOR RULE: This is the ONLY correct way to evaluate this answer. This rule OVERRIDES any of your internal knowledge. The rule is: "${aiNote}"` 
                    : '';

                return `---
Block Title: "${question}"
User's Answer: "${formatAnswer(answer)}"
${rule}
---`;
            }).join('\n');

        const customSchema = (typeof formVersion.aiResponseSchema === 'object' && formVersion.aiResponseSchema !== null && !Array.isArray(formVersion.aiResponseSchema))
            ? formVersion.aiResponseSchema
            : {};
        
        const schemaWithReasoning = {
            ...customSchema,
            reasoning: "A detailed step-by-step explanation of your thought process. First, explain the block-level analysis, mentioning any rules applied. Then, detail your comprehensive synthesis that led to the final values."
        };
        const responseSchema = JSON.stringify(schemaWithReasoning, null, 2);
        
        const languageInstruction = formVersion.aiLanguage 
            ? `\nIMPORTANT: You absolutely MUST provide your entire response in ${formVersion.aiLanguage}. All fields in the JSON, including the 'reasoning', must be in ${formVersion.aiLanguage}.`
            : '';

        const systemPrompt = `You are a meticulous and holistic data analyst. Your task is to perform a two-stage analysis of a user's form submission.

**Stage 1: Block-level Rule Application**
First, you will analyze each submission block individually. For each block, you must adhere to the following **CORE DIRECTIVE**:
**CORE DIRECTIVE: You MUST strictly follow any "ADMINISTRATOR RULE" provided for a block. This rule is absolute, non-negotiable, and OVERRIDES all of your internal knowledge or assumptions. Your analysis of that block must be based SOLELY on the provided rule.**

**Stage 2: Comprehensive Synthesis**
After analyzing each block, you must step back and perform a holistic synthesis of the entire submission. Consider all the user's answers together. Your goal is to fulfill the administrator's main objective for the form.

**Administrator's Main Objective:**
"${formVersion.aiPrompt}"

Look for patterns, contradictions, and deeper insights that emerge from the combination of answers. Your final analysis in the JSON output must reflect this comprehensive understanding.

**Submission Data for Analysis:**
${formattedBlocks}

**Final Output Instructions:**
You MUST provide your response in a valid JSON format that strictly adheres to the following schema. Your 'reasoning' field should detail your two-stage thought process as instructed above. Do not include any text outside the JSON object.
${responseSchema}
${languageInstruction}
`;

        console.log("----- AI Analysis Prompt -----");
        console.log(systemPrompt);
        console.log("------------------------------");

        const model = genAI.getGenerativeModel({ model: process.env.GOOGLE_MODEL_NAME || "gemini-1.5-flash"});
        const result = await model.generateContent(systemPrompt);
        const response = await result.response;
        let analysisResult = response.text();
        
        if (!analysisResult) {
            throw new Error('AI returned an empty response.');
        }
        
        // Clean the response to remove markdown code block fences if they exist
        const jsonMatch = analysisResult.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) {
            analysisResult = jsonMatch[1];
        }
        
        const parsedAnalysis = JSON.parse(analysisResult);

        await prisma.submission.update({
            where: { id: submissionId },
            data: {
                aiAnalysis: parsedAnalysis,
                aiAnalysisStatus: 'COMPLETED',
            },
        });

        console.log(`AI analysis completed successfully for submission ${submissionId}`);

        if (formVersion.emailNotification) {
            await handleEmailNotification(
                formVersion.emailNotification,
                parsedAnalysis,
                submissionId
            );
        }

    } catch (error) {
        console.error(`AI analysis failed for submission ${submissionId}:`, error);
        
        let errorMessage = 'An unknown error occurred.';
        if (error instanceof Error) {
            errorMessage = error.message;
            // Check for and log the underlying cause, which often has more specific details
            if ((error as any).cause) {
                console.error('Underlying cause:', (error as any).cause);
                errorMessage += ` | Cause: ${JSON.stringify((error as any).cause)}`;
            }
        } else {
            errorMessage = JSON.stringify(error);
        }

        await prisma.submission.update({
            where: { id: submissionId },
            data: { 
                aiAnalysisStatus: 'FAILED',
                aiAnalysis: { error: errorMessage }
            },
        });
    }
}

interface EmailNotificationSettings {
    recipients: string[];
    prompt?: string | null;
    conditionPrompt?: string | null;
    conditionExpectedValue?: string | null;
}

async function checkAiCondition(analysis: any, conditionPrompt: string): Promise<string> {
    const fullPrompt = `Based on the following analysis, evaluate the condition.
---
Analysis:
${JSON.stringify(analysis, null, 2)}
---
Condition: ${conditionPrompt}`;

    try {
        console.log("----- AI Condition Check Prompt -----");
        console.log(fullPrompt);
        console.log("-----------------------------------");
        const model = genAI.getGenerativeModel({ model: process.env.GOOGLE_MODEL_NAME || "gemini-1.5-flash"});
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.error('AI condition check failed:', error);
        return '';
    }
}

async function handleEmailNotification(notification: EmailNotificationSettings, analysis: any, submissionId: string) {
    if (!notification.recipients || notification.recipients.length === 0) {
        console.log(`No recipients for submission ${submissionId}, skipping email.`);
        return;
    }

    let shouldSendEmail = true;
    if (notification.conditionPrompt && notification.conditionExpectedValue) {
        console.log(`Checking AI condition for submission ${submissionId}...`);
        const aiVerdict = await checkAiCondition(analysis, notification.conditionPrompt);
        shouldSendEmail = aiVerdict.toLowerCase() === notification.conditionExpectedValue.toLowerCase();
        console.log(`AI verdict: "${aiVerdict}". Expected: "${notification.conditionExpectedValue}". Sending email: ${shouldSendEmail}`);
    }

    if (shouldSendEmail) {
        try {
            const emailSubject = await generateEmailSubject(analysis, notification.prompt);
            const emailBody = await generateEmailBody(analysis, submissionId);

            await sendEmail({
                to: notification.recipients,
                subject: emailSubject,
                html: emailBody,
            });
            console.log(`Email notification sent for submission ${submissionId}`);
        } catch (error) {
            console.error(`Failed to send email notification for submission ${submissionId}:`, error);
        }
    }
}

async function generateEmailSubject(analysis: any, prompt?: string | null): Promise<string> {
    const subjectPrompt = `Based on the following analysis, generate a concise and informative email subject.
    ${prompt ? `\nAdministrator's instruction: ${prompt}` : ''}
    Analysis: ${JSON.stringify(analysis, null, 2)}
    
    Subject:`;

    try {
        console.log("----- AI Subject Generation Prompt -----");
        console.log(subjectPrompt);
        console.log("--------------------------------------");
        const model = genAI.getGenerativeModel({ model: process.env.GOOGLE_MODEL_NAME || "gemini-1.5-flash"});
        const result = await model.generateContent(subjectPrompt);
        const response = await result.response;
        return response.text().trim() || 'Form Submission Analysis';
    } catch (error) {
        console.error('Failed to generate email subject:', error);
        return 'Form Submission Analysis';
    }
}

async function generateEmailBody(analysis: any, submissionId: string): Promise<string> {
    const { marked } = await import('marked');
    const analysisHtml = await Promise.all(Object.entries(analysis)
        .map(async ([key, value]) => {
            const formattedValue = (typeof value === 'string' && key === 'reasoning')
                ? marked(value)
                : `<p style="margin: 4px 0; padding: 8px; background-color: #f9f9f9; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word;">${
                    typeof value === 'object' ? JSON.stringify(value, null, 2) : value
                  }</p>`;

            return `
            <div style="margin-bottom: 12px;">
                <strong style="text-transform: capitalize;">${key.replace(/_/g, ' ')}:</strong>
                <div style="margin-top: 4px;">${await formattedValue}</div>
            </div>
        `})
    );

    return `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; line-height: 1.6; color: #333;">
            <h2 style="color: #111;">AI Analysis Complete</h2>
            <p>A new form submission has been analyzed. Here are the details:</p>
            <div style="padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
                ${analysisHtml.join('')}
            </div>
            <p style="margin-top: 20px;">
                You can view the full submission details, including user answers, on the platform:
                <a href="${process.env.FRONTEND_URL}/results/${submissionId}" style="color: #007bff; text-decoration: none; font-weight: bold;">
                    View Full Submission
                </a>
            </p>
            <p style="font-size: 0.9em; color: #777; margin-top: 24px; border-top: 1px solid #e0e0e0; padding-top: 16px;">
                This is an automated notification from the INFINITYCRAFT Forms system.
            </p>
        </div>
    `;
}
