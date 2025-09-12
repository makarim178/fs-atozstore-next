import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrderCountOrderByAggregateInputObjectSchema } from './OrderCountOrderByAggregateInput.schema';
import { OrderAvgOrderByAggregateInputObjectSchema } from './OrderAvgOrderByAggregateInput.schema';
import { OrderMaxOrderByAggregateInputObjectSchema } from './OrderMaxOrderByAggregateInput.schema';
import { OrderMinOrderByAggregateInputObjectSchema } from './OrderMinOrderByAggregateInput.schema';
import { OrderSumOrderByAggregateInputObjectSchema } from './OrderSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrderAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrderSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrderOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderOrderByWithAggregationInput>;
export const OrderOrderByWithAggregationInputObjectZodSchema = makeSchema();
