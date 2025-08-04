import prisma from '../../database/prisma';
import { AppError } from '../../middleware/errorHandler';
import { getSubmissionsByFormId } from '../submission/submission.service';


// Interfaces for analysis results remain mostly the same
interface ChoiceResult {
  [option: string]: { count: number; percentage: number; };
}
interface TextResult {
  responses: string[];
}
interface RatingResult {
  average: number;
  distribution: { [star: string]: { count: number; percentage: number; } };
}
type BlockResult = ChoiceResult | TextResult | RatingResult;

export interface AnalysisResults {
  totalSubmissions: number;
  formTitle: string;
  formVersion?: number;
  resultsByBlock: {
    [blockId: string]: {
      type: string;
      properties: any;
      result: BlockResult;
    };
  };
}

async function findFormByIdentifier(identifier: string) {
    return prisma.form.findFirst({
        where: { OR: [{ id: identifier }, { customUrl: identifier }] },
        include: {
            versions: { orderBy: { version: 'asc' } },
        }
    });
}

/**
 * Analyzes submissions for a form, optionally filtered by a specific version.
 * @param identifier The ID or custom URL of the form to analyze.
 * @param version - The specific version number to analyze (optional). If not provided, analyzes all versions.
 * @returns An object containing aggregated analysis results.
 */
export async function analyzeSubmissions(identifier: string, version?: number): Promise<AnalysisResults> {
  const form = await findFormByIdentifier(identifier);

  if (!form || form.versions.length === 0) {
    throw new AppError('Form or specified version not found', 404);
  }

  const submissions = await getSubmissionsByFormId(identifier, version);
  const totalSubmissions = submissions.length;
  const resultsByBlock: AnalysisResults['resultsByBlock'] = {};

  // Determine which blocks to analyze based on version filter
  let blocksToAnalyze: any[] = [];
  let formTitle: string;
  
  if (version) {
    // Single version analysis
    const singleVersion = form.versions.find(v => v.version === version);
    if (!singleVersion) throw new AppError(`Version ${version} not found for this form.`, 404);
    blocksToAnalyze = singleVersion.blocks as any[];
    formTitle = singleVersion.title;
  } else {
    // "All versions" analysis: aggregate unique blocks from all versions
    const allBlocksMap = new Map<string, any>();
    form.versions.forEach(v => {
      const vBlocks = v.blocks as any[];
      vBlocks.forEach(block => {
        if (!allBlocksMap.has(block.id)) {
          allBlocksMap.set(block.id, block);
        }
      });
    });
    blocksToAnalyze = Array.from(allBlocksMap.values());
    formTitle = form.versions[form.versions.length - 1].title; // Use latest title
  }
  
  for (const block of blocksToAnalyze) {
    resultsByBlock[block.id] = {
      type: block.type,
      properties: block.properties,
      result: {},
    };

    const blockSubmissions = submissions.filter(s => (s.data as any)?.[block.id]);
    const answers = blockSubmissions.map(s => (s.data as any)[block.id].value);

    switch (block.type) {
      case 'SINGLE_CHOICE':
      case 'MULTIPLE_CHOICE':
        const choiceResult: ChoiceResult = {};
        const options = block.properties?.options || [];
        options.forEach((opt: string) => choiceResult[opt] = { count: 0, percentage: 0 });

        let totalChoices = 0;
        answers.forEach(answer => {
            if (Array.isArray(answer)) { // Multiple choice
                answer.forEach(choice => { 
                    if (choiceResult[choice]) {
                        choiceResult[choice].count++;
                        totalChoices++;
                    }
                });
            } else { // Single choice
                if (answer && choiceResult[answer]) {
                    choiceResult[answer].count++;
                    totalChoices++;
                }
            }
        });
        
        options.forEach((opt: string) => {
            if (totalChoices > 0) choiceResult[opt].percentage = parseFloat(((choiceResult[opt].count / totalSubmissions) * 100).toFixed(2));
        });

        resultsByBlock[block.id].result = choiceResult;
        break;

      case 'TEXT_INPUT':
      case 'TEXTAREA':
        resultsByBlock[block.id].result = {
          responses: answers.filter(a => typeof a === 'string' && a.trim() !== '')
        };
        break;
        
      case 'RATING':
        const maxRating = block.properties?.maxRating || 5;
        const ratingResult: RatingResult = { average: 0, distribution: {} };
        for (let i = 1; i <= maxRating; i++) ratingResult.distribution[i] = { count: 0, percentage: 0 };
        
        const validRatings = answers.filter(a => typeof a === 'number' && a >= 1 && a <= maxRating) as number[];
        
        validRatings.forEach(rating => ratingResult.distribution[rating].count++);
        
        if (validRatings.length > 0) {
          const totalRating = validRatings.reduce((sum, r) => sum + r, 0);
          ratingResult.average = parseFloat((totalRating / validRatings.length).toFixed(2));
          for (let i = 1; i <= maxRating; i++) {
            ratingResult.distribution[i].percentage = parseFloat(((ratingResult.distribution[i].count / validRatings.length) * 100).toFixed(2));
          }
        }
        
        resultsByBlock[block.id].result = ratingResult;
        break;
        
      default:
        resultsByBlock[block.id].result = { responses: [] };
        break;
    }
  }

  return {
    totalSubmissions,
    formTitle,
    formVersion: version,
    resultsByBlock,
  };
}
