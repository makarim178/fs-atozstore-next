import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartCreateNestedOneWithoutCart_itemsInputObjectSchema } from './CartCreateNestedOneWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  carts: z.lazy(() => CartCreateNestedOneWithoutCart_itemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateWithoutProductsInput>;
export const CartItemCreateWithoutProductsInputObjectZodSchema = makeSchema();
