import { PrismaClient } from '@prisma/client';

// Use a global variable to prevent multiple PrismaClient instances in development.
// This is a specific workaround for Next.js development mode.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
