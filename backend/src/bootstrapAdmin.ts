import prisma from './database/prisma';
import bcrypt from 'bcryptjs';
import { Role } from './generated/prisma';

const SALT_ROUNDS = 10;

/**
 * Checks for the existence of a SUPER_ADMIN user and creates one from environment
 * variables if none exists. This is crucial for the initial setup of the application.
 * This function is intended to be run only once on application startup.
 */
export async function bootstrapAdmin() {
  try {
    const superAdminCount = await prisma.user.count({
      where: { role: Role.SUPER_ADMIN },
    });

    // If a SUPER_ADMIN already exists, do nothing.
    if (superAdminCount > 0) {
      return;
    }

    const superAdminEmail = process.env.SUPER_ADMIN_EMAIL;
    const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD;

    if (!superAdminEmail || !superAdminPassword) {
      console.warn(
        '****************************************************\n' +
        'WARNING: No SUPER_ADMIN user found.\n' +
        'To create the first SUPER_ADMIN account, you must set\n' +
        'SUPER_ADMIN_EMAIL and SUPER_ADMIN_PASSWORD in your .env file.\n' +
        '****************************************************'
      );
      return;
    }

    console.log('No SUPER_ADMIN user found. Creating initial SUPER_ADMIN account...');

    const hashedPassword = await bcrypt.hash(superAdminPassword, SALT_ROUNDS);

    await prisma.user.create({
      data: {
        email: superAdminEmail,
        password: hashedPassword,
        role: Role.SUPER_ADMIN,
        name: 'Super Administrator',
      },
    });

    console.log('Initial SUPER_ADMIN account created successfully.');
  } catch (error) {
    console.error('Failed to bootstrap SUPER_ADMIN user:', error);
    // We exit here because a misconfigured admin setup could be a security risk.
    process.exit(1);
  }
}
