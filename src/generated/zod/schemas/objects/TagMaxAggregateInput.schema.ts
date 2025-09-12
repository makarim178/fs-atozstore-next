import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  product_id: z.literal(true).optional()
}).strict();
export const TagMaxAggregateInputObjectSchema: z.ZodType<Prisma.TagMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagMaxAggregateInputType>;
export const TagMaxAggregateInputObjectZodSchema = makeSchema();
