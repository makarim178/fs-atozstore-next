import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagCountOrderByAggregateInputObjectSchema } from './TagCountOrderByAggregateInput.schema';
import { TagMaxOrderByAggregateInputObjectSchema } from './TagMaxOrderByAggregateInput.schema';
import { TagMinOrderByAggregateInputObjectSchema } from './TagMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByWithAggregationInput>;
export const TagOrderByWithAggregationInputObjectZodSchema = makeSchema();
