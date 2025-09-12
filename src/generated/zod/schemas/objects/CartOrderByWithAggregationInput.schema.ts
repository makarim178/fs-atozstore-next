import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CartCountOrderByAggregateInputObjectSchema } from './CartCountOrderByAggregateInput.schema';
import { CartMaxOrderByAggregateInputObjectSchema } from './CartMaxOrderByAggregateInput.schema';
import { CartMinOrderByAggregateInputObjectSchema } from './CartMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_ordered: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => CartCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CartMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CartMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CartOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CartOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CartOrderByWithAggregationInput>;
export const CartOrderByWithAggregationInputObjectZodSchema = makeSchema();
