import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutCartsInputObjectSchema } from './CartItemUpdateWithoutCartsInput.schema';
import { CartItemUncheckedUpdateWithoutCartsInputObjectSchema } from './CartItemUncheckedUpdateWithoutCartsInput.schema';
import { CartItemCreateWithoutCartsInputObjectSchema } from './CartItemCreateWithoutCartsInput.schema';
import { CartItemUncheckedCreateWithoutCartsInputObjectSchema } from './CartItemUncheckedCreateWithoutCartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CartItemUpdateWithoutCartsInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutCartsInputObjectSchema)]),
  create: z.union([z.lazy(() => CartItemCreateWithoutCartsInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartsInputObjectSchema)])
}).strict();
export const CartItemUpsertWithWhereUniqueWithoutCartsInputObjectSchema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutCartsInput>;
export const CartItemUpsertWithWhereUniqueWithoutCartsInputObjectZodSchema = makeSchema();
