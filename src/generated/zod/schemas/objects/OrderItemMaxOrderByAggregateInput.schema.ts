import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional()
}).strict();
export const OrderItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemMaxOrderByAggregateInput>;
export const OrderItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
