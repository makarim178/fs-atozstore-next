import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  url: z.literal(true).optional()
}).strict();
export const ImageMaxAggregateInputObjectSchema: z.ZodType<Prisma.ImageMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ImageMaxAggregateInputType>;
export const ImageMaxAggregateInputObjectZodSchema = makeSchema();
