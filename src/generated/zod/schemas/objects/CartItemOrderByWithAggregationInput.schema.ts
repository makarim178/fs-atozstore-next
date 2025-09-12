import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CartItemCountOrderByAggregateInputObjectSchema } from './CartItemCountOrderByAggregateInput.schema';
import { CartItemAvgOrderByAggregateInputObjectSchema } from './CartItemAvgOrderByAggregateInput.schema';
import { CartItemMaxOrderByAggregateInputObjectSchema } from './CartItemMaxOrderByAggregateInput.schema';
import { CartItemMinOrderByAggregateInputObjectSchema } from './CartItemMinOrderByAggregateInput.schema';
import { CartItemSumOrderByAggregateInputObjectSchema } from './CartItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cart_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  _count: z.lazy(() => CartItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CartItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CartItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CartItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CartItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CartItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CartItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemOrderByWithAggregationInput>;
export const CartItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
