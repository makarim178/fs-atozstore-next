import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ReviewMinAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMinAggregateInputType>;
export const ReviewMinAggregateInputObjectZodSchema = makeSchema();
