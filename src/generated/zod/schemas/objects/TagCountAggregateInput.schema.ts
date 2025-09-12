import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TagCountAggregateInputObjectSchema: z.ZodType<Prisma.TagCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagCountAggregateInputType>;
export const TagCountAggregateInputObjectZodSchema = makeSchema();
