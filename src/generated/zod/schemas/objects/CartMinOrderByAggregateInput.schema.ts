import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  is_ordered: SortOrderSchema.optional()
}).strict();
export const CartMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartMinOrderByAggregateInput>;
export const CartMinOrderByAggregateInputObjectZodSchema = makeSchema();
