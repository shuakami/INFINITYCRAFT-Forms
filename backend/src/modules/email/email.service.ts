import { Resend } from 'resend';
import { AppError } from '../../middleware/errorHandler';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  to: string[];
  subject: string;
  html: string;
  from?: string;
}

/**
 * Sends an email using the Resend service.
 * @param params - The email parameters.
 * @param params.to - A list of recipient email addresses.
 * @param params.subject - The subject of the email.
 * @param params.html - The HTML content of the email.
 * @param params.from - The sender's email address. Defaults to 'onboarding@resend.dev'.
 */
export async function sendEmail({ to, subject, html, from = 'InfinityCraft Forms <noreply@email.sdjz.wiki>' }: EmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: from,
      to: to,
      subject: subject,
      html: html,
    });

    if (error) {
      throw new AppError(`Failed to send email: ${error.message}`, 500);
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError('An unexpected error occurred while sending the email', 500);
  }
}
