import { PrismaClient } from '../generated/prisma';

// add prisma to the NodeJS global type
declare global {
  var prisma: PrismaClient | undefined;
}

// prevent multiple instances of PrismaClient in development
const client = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = client;
}

export default client;
