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
export const ReviewMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMinOrderByAggregateInput>;
export const ReviewMinOrderByAggregateInputObjectZodSchema = makeSchema();
