import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReviewCountOrderByAggregateInputObjectSchema } from './ReviewCountOrderByAggregateInput.schema';
import { ReviewAvgOrderByAggregateInputObjectSchema } from './ReviewAvgOrderByAggregateInput.schema';
import { ReviewMaxOrderByAggregateInputObjectSchema } from './ReviewMaxOrderByAggregateInput.schema';
import { ReviewMinOrderByAggregateInputObjectSchema } from './ReviewMinOrderByAggregateInput.schema';
import { ReviewSumOrderByAggregateInputObjectSchema } from './ReviewSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  comment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReviewCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReviewAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReviewMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReviewMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReviewSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReviewOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewOrderByWithAggregationInput>;
export const ReviewOrderByWithAggregationInputObjectZodSchema = makeSchema();
