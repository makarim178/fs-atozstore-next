import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderItemCountOrderByAggregateInputObjectSchema } from './OrderItemCountOrderByAggregateInput.schema';
import { OrderItemAvgOrderByAggregateInputObjectSchema } from './OrderItemAvgOrderByAggregateInput.schema';
import { OrderItemMaxOrderByAggregateInputObjectSchema } from './OrderItemMaxOrderByAggregateInput.schema';
import { OrderItemMinOrderByAggregateInputObjectSchema } from './OrderItemMinOrderByAggregateInput.schema';
import { OrderItemSumOrderByAggregateInputObjectSchema } from './OrderItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  _count: z.lazy(() => OrderItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrderItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrderItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrderItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrderItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrderItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrderItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemOrderByWithAggregationInput>;
export const OrderItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
