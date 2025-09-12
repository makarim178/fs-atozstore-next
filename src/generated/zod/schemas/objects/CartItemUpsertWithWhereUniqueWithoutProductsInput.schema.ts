import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutProductsInputObjectSchema } from './CartItemUpdateWithoutProductsInput.schema';
import { CartItemUncheckedUpdateWithoutProductsInputObjectSchema } from './CartItemUncheckedUpdateWithoutProductsInput.schema';
import { CartItemCreateWithoutProductsInputObjectSchema } from './CartItemCreateWithoutProductsInput.schema';
import { CartItemUncheckedCreateWithoutProductsInputObjectSchema } from './CartItemUncheckedCreateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CartItemUpdateWithoutProductsInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutProductsInputObjectSchema)]),
  create: z.union([z.lazy(() => CartItemCreateWithoutProductsInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductsInputObjectSchema)])
}).strict();
export const CartItemUpsertWithWhereUniqueWithoutProductsInputObjectSchema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutProductsInput>;
export const CartItemUpsertWithWhereUniqueWithoutProductsInputObjectZodSchema = makeSchema();
