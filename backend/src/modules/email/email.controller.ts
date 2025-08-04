import { Request, Response, NextFunction } from 'express';
import prisma from '../../database/prisma';
import { UpdateEmailNotificationInput } from './email.schema';
import { AppError } from '../../middleware/errorHandler';

export async function updateEmailNotificationHandler(req: Request<{ formVersionId: string }, {}, UpdateEmailNotificationInput>, res: Response, next: NextFunction) {
  try {
    const { formVersionId } = req.params;
    const { recipients, prompt, conditionPrompt, conditionExpectedValue } = req.body;

    const formVersion = await prisma.formVersion.findUnique({ where: { id: formVersionId } });

    if (!formVersion) {
      throw new AppError('Form version not found', 404);
    }

    const emailNotification = await prisma.emailNotification.upsert({
      where: { formVersionId },
      update: { 
        recipients, 
        prompt, 
        conditionPrompt, 
        conditionExpectedValue 
      },
      create: {
        formVersionId,
        recipients: recipients || [],
        prompt,
        conditionPrompt,
        conditionExpectedValue,
      },
    });

    res.status(200).json(emailNotification);
  } catch (error) {
    next(error);
  }
}
