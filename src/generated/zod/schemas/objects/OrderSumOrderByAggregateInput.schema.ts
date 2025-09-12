import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  total: SortOrderSchema.optional()
}).strict();
export const OrderSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderSumOrderByAggregateInput>;
export const OrderSumOrderByAggregateInputObjectZodSchema = makeSchema();
