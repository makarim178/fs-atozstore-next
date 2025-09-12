import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  product_id: z.literal(true).optional()
}).strict();
export const TagMinAggregateInputObjectSchema: z.ZodType<Prisma.TagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagMinAggregateInputType>;
export const TagMinAggregateInputObjectZodSchema = makeSchema();
