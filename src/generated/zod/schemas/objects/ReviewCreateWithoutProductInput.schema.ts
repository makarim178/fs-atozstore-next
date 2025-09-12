import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const ReviewCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutProductInput>;
export const ReviewCreateWithoutProductInputObjectZodSchema = makeSchema();
