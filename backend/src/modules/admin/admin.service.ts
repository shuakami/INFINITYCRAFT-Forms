import bcrypt from 'bcryptjs';
import prisma from '../../database/prisma';
import { AppError } from '../../middleware/errorHandler';
import { CreateAdminUserInput } from './admin.schema';
import { Role } from '../../generated/prisma';

const SALT_ROUNDS = 10;

/**
 * Creates a new user (typically an ADMIN) by a SUPER_ADMIN.
 * @param input - The user creation data.
 * @returns The newly created user object, excluding the password.
 * @throws An error if a user with the same email already exists.
 */
export async function createAdminUser(input: CreateAdminUserInput) {
  const { email, password, name, role } = input;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new AppError('User with this email already exists', 409);
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: role || Role.ADMIN,
    },
  });
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

/**
 * Retrieves all users from the database.
 * @returns A list of all user objects, excluding their passwords.
 */
export async function getAllUsers() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        }
    });
    return users;
}
