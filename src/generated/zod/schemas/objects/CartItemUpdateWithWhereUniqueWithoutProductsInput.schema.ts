import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutProductsInputObjectSchema } from './CartItemUpdateWithoutProductsInput.schema';
import { CartItemUncheckedUpdateWithoutProductsInputObjectSchema } from './CartItemUncheckedUpdateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateWithoutProductsInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutProductsInputObjectSchema)])
}).strict();
export const CartItemUpdateWithWhereUniqueWithoutProductsInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutProductsInput>;
export const CartItemUpdateWithWhereUniqueWithoutProductsInputObjectZodSchema = makeSchema();
