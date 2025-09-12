import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemCreateNestedManyWithoutCartsInputObjectSchema } from './CartItemCreateNestedManyWithoutCartsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  is_ordered: z.boolean().optional().nullable(),
  cart_items: z.lazy(() => CartItemCreateNestedManyWithoutCartsInputObjectSchema)
}).strict();
export const CartCreateInputObjectSchema: z.ZodType<Prisma.CartCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateInput>;
export const CartCreateInputObjectZodSchema = makeSchema();
