import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cart_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
export const CartItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemMaxOrderByAggregateInput>;
export const CartItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
