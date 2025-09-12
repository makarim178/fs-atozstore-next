import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CategoryCountAggregateInputObjectSchema: z.ZodType<Prisma.CategoryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCountAggregateInputType>;
export const CategoryCountAggregateInputObjectZodSchema = makeSchema();
