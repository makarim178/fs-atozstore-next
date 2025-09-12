import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ImageCountAggregateInputObjectSchema: z.ZodType<Prisma.ImageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ImageCountAggregateInputType>;
export const ImageCountAggregateInputObjectZodSchema = makeSchema();
