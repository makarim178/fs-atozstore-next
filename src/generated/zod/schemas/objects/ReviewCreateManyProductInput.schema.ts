import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const ReviewCreateManyProductInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyProductInput>;
export const ReviewCreateManyProductInputObjectZodSchema = makeSchema();
