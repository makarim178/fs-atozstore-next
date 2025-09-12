import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CartItemOrderByRelationAggregateInputObjectSchema } from './CartItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_ordered: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cart_items: z.lazy(() => CartItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CartOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CartOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CartOrderByWithRelationInput>;
export const CartOrderByWithRelationInputObjectZodSchema = makeSchema();
