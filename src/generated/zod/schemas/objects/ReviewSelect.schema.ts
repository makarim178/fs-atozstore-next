import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  rating: z.boolean().optional(),
  comment: z.boolean().optional(),
  created_at: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ReviewSelectObjectSchema: z.ZodType<Prisma.ReviewSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReviewSelect>;
export const ReviewSelectObjectZodSchema = makeSchema();
