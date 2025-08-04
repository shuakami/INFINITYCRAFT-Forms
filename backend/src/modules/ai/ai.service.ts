import OpenAI from 'openai';
import prisma from '../../database/prisma';
import { AppError } from '../../middleware/errorHandler';
import { sendEmail } from '../email/email.service'; // Import the email service
import { JsonObject } from '@prisma/client/runtime/library';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_BASE_URL,
});

/**
 * Asynchronously analyzes a form submission using an AI model.
 * Fetches the specific form version to which the submission belongs.
 * @param submissionId - The ID of the submission to analyze.
 */
const formatAnswer = (answer: any): string => {
    if (answer === 'N/A' || answer === null || answer === undefined) return 'N/A';
    if (Array.isArray(answer)) return answer.join(', ');
    if (typeof answer === 'object') {
        return Object.entries(answer)
            .filter(([, value]) => value) // Filter out empty values
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
                    emailNotification: true, // Include email notification settings
                },
            },
        },
    });

    // AI analysis is skipped if the version it belongs to didn't have AI enabled.
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
        
        // CONSTRUCT THE MASTER PROMPT
        // 1. Reformat how each question block is presented to the AI
        const formattedBlocks = blocks
            .sort((a, b) => a.order - b.order)
            .map(block => {
                const answerData = (submissionData as any)?.[block.id];
                const answer = answerData?.value ?? 'N/A';
                const properties = block.properties as { label?: string, aiNote?: string };
                const question = properties?.label || 'Unnamed Question';
                const aiNote = properties?.aiNote || '';

                // If aiNote exists, frame it as an absolute rule.
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

        // 2. Define the AI's persona and core instructions
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

        // Call the AI model
        const model = process.env.OPENAI_MODEL_NAME || "gpt-4-turbo";
        const response = await openai.chat.completions.create({
            model: model,
            messages: [{ role: "system", content: systemPrompt }],
            temperature: 0.7,
            response_format: { type: "json_object" },
        });

        const analysisResult = response.choices[0].message.content;
        if (!analysisResult) {
            throw new Error('AI returned an empty response.');
        }
        
        const parsedAnalysis = JSON.parse(analysisResult);

        // Save the result
        await prisma.submission.update({
            where: { id: submissionId },
            data: {
                aiAnalysis: parsedAnalysis,
                aiAnalysisStatus: 'COMPLETED',
            },
        });

        console.log(`AI analysis completed successfully for submission ${submissionId}`);

        // 邮件通知处理
if (formVersion.emailNotification) {
    await handleEmailNotification(
        formVersion.emailNotification,
        parsedAnalysis,
        submissionId
    );
}

    } catch (error) {
        console.error(`AI analysis failed for submission ${submissionId}:`, error);
        await prisma.submission.update({
            where: { id: submissionId },
            data: { 
                aiAnalysisStatus: 'FAILED',
                aiAnalysis: { error: (error as Error).message }
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
        const model = process.env.OPENAI_MODEL_NAME || "gpt-4-turbo";
        const response = await openai.chat.completions.create({
            model: model,
            messages: [{ role: "system", content: fullPrompt }],
            temperature: 0.1,
            max_tokens: 50, 
        });
        return response.choices[0].message.content?.trim() || '';
    } catch (error) {
        console.error('AI condition check failed:', error);
        return ''; // Return empty on failure
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
            const emailBody = generateEmailBody(analysis, submissionId);

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

/**
 * Generates an email subject using the AI model.
 * @param analysis - The AI analysis result.
 * @param prompt - A custom prompt for generating the subject.
 * @returns The generated email subject.
 */
async function generateEmailSubject(analysis: any, prompt?: string | null): Promise<string> {
    const subjectPrompt = `Based on the following analysis, generate a concise and informative email subject.
    ${prompt ? `\nAdministrator's instruction: ${prompt}` : ''}
    Analysis: ${JSON.stringify(analysis, null, 2)}
    
    Subject:`;

    try {
        const model = process.env.OPENAI_MODEL_NAME || "gpt-4-turbo";
        const response = await openai.chat.completions.create({
            model: model,
            messages: [{ role: "system", content: subjectPrompt }],
            temperature: 0.5,
            max_tokens: 20,
        });

        return response.choices[0].message.content?.trim() || 'Form Submission Analysis';
    } catch (error) {
        console.error('Failed to generate email subject:', error);
        return 'Form Submission Analysis'; // Fallback subject
    }
}

/**
 * Generates the HTML body for the email notification.
 * @param analysis - The AI analysis result.
 * @param submissionId - The ID of the submission.
 * @returns The HTML email body.
 */
function generateEmailBody(analysis: any, submissionId: string): string {
    const analysisHtml = Object.entries(analysis)
        .map(([key, value]) => `
            <div style="margin-bottom: 12px;">
                <strong style="text-transform: capitalize;">${key.replace(/_/g, ' ')}:</strong>
                <p style="margin: 4px 0; padding: 8px; background-color: #f9f9f9; border-radius: 4px;">
                    ${typeof value === 'object' ? JSON.stringify(value, null, 2) : value}
                </p>
            </div>
        `)
        .join('');

    return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #333;">AI Analysis Complete for Submission</h2>
            <p>A new form submission has been analyzed. Here are the details:</p>
            <div style="padding: 16px; border: 1px solid #ddd; border-radius: 8px; background-color: #ffffff;">
                ${analysisHtml}
            </div>
            <p>
                You can view the full submission details here:
                <a href="${process.env.FRONTEND_URL}/submission/${submissionId}" style="color: #007bff; text-decoration: none;">
                    View Submission
                </a>
            </p>
            <p style="font-size: 0.9em; color: #777;">
                This is an automated notification from the InfinityCraft Forms system.
            </p>
        </div>
    `;
}
