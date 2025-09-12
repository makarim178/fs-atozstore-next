import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  rating: z.literal(true).optional()
}).strict();
export const ReviewAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReviewAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewAvgAggregateInputType>;
export const ReviewAvgAggregateInputObjectZodSchema = makeSchema();
