import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartCreateNestedOneWithoutCart_itemsInputObjectSchema } from './CartCreateNestedOneWithoutCart_itemsInput.schema';
import { ProductCreateNestedOneWithoutCart_itemsInputObjectSchema } from './ProductCreateNestedOneWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  carts: z.lazy(() => CartCreateNestedOneWithoutCart_itemsInputObjectSchema),
  products: z.lazy(() => ProductCreateNestedOneWithoutCart_itemsInputObjectSchema)
}).strict();
export const CartItemCreateInputObjectSchema: z.ZodType<Prisma.CartItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateInput>;
export const CartItemCreateInputObjectZodSchema = makeSchema();
