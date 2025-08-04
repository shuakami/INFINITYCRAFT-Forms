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

  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log('[DEBUG] user.service.ts -> User from DB:', user); // LOG 1

  if (!user) {
    // Generic error message to prevent email enumeration attacks
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: '7d', // Token expires in 7 days
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = user;

  console.log('[DEBUG] user.service.ts -> User object being sent to frontend:', userWithoutPassword); // LOG 2

  return { token, user: userWithoutPassword };
}
