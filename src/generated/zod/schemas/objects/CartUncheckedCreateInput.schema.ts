import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemUncheckedCreateNestedManyWithoutCartsInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutCartsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  is_ordered: z.boolean().optional().nullable(),
  cart_items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartsInputObjectSchema)
}).strict();
export const CartUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUncheckedCreateInput>;
export const CartUncheckedCreateInputObjectZodSchema = makeSchema();
