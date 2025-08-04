import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../database/prisma';
import { LoginUserInput } from './user.schema';


// !! IMPORTANT !!
// Add JWT_SECRET to your .env file for production use.
// e.g., JWT_SECRET=your-super-secret-key-that-is-long-and-random
const JWT_SECRET = process.env.JWT_SECRET || 'a-default-secret-key-for-development';

/**
 * Validates user credentials and returns a JWT if successful.
 * @param input - The user login data.
 * @returns A JSON Web Token (JWT).
 * @throws An error if the credentials are invalid.
 */
export async function loginUser(input: LoginUserInput) {
  const { email, password } = input;

  console.log('[DEBUG] Attempting to find user with email:', email);
  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log('[DEBUG] User from DB:', user);

  if (!user) {
    console.error('[ERROR] User not found for email:', email);
    throw new Error('Invalid email or password');
  }

  console.log('[DEBUG] Comparing password...');
  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log('[DEBUG] Password comparison result:', isPasswordValid);

  if (!isPasswordValid) {
    console.error('[ERROR] Invalid password for user:', email);
    throw new Error('Invalid email or password');
  }

  console.log('[DEBUG] Password is valid. Signing JWT...');
  if (!process.env.JWT_SECRET) {
      console.warn('[WARN] JWT_SECRET is not set in environment variables! Using insecure default for development.');
  }
  
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: '7d', // Token expires in 7 days
  });
  console.log('[DEBUG] JWT signed successfully.');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = user;

  console.log('[DEBUG] Returning token and user object.');

  return { token, user: userWithoutPassword };
}
