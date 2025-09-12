import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const CartItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemSumOrderByAggregateInput>;
export const CartItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
