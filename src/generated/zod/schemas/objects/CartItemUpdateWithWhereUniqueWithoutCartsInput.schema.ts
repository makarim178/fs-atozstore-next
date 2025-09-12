import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutCartsInputObjectSchema } from './CartItemUpdateWithoutCartsInput.schema';
import { CartItemUncheckedUpdateWithoutCartsInputObjectSchema } from './CartItemUncheckedUpdateWithoutCartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateWithoutCartsInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutCartsInputObjectSchema)])
}).strict();
export const CartItemUpdateWithWhereUniqueWithoutCartsInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutCartsInput>;
export const CartItemUpdateWithWhereUniqueWithoutCartsInputObjectZodSchema = makeSchema();
