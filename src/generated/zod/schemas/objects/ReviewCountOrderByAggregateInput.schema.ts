import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ReviewCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCountOrderByAggregateInput>;
export const ReviewCountOrderByAggregateInputObjectZodSchema = makeSchema();
