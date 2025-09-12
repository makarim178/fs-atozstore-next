import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateNestedOneWithoutCart_itemsInputObjectSchema } from './ProductCreateNestedOneWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  products: z.lazy(() => ProductCreateNestedOneWithoutCart_itemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutCartsInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateWithoutCartsInput>;
export const CartItemCreateWithoutCartsInputObjectZodSchema = makeSchema();
