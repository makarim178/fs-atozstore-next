import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const OrderMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderMinOrderByAggregateInput>;
export const OrderMinOrderByAggregateInputObjectZodSchema = makeSchema();
