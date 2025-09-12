import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cart_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
export const CartItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCountOrderByAggregateInput>;
export const CartItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
