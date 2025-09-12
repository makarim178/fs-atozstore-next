import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemCreateWithoutCartsInputObjectSchema } from './CartItemCreateWithoutCartsInput.schema';
import { CartItemUncheckedCreateWithoutCartsInputObjectSchema } from './CartItemUncheckedCreateWithoutCartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CartItemCreateWithoutCartsInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartsInputObjectSchema)])
}).strict();
export const CartItemCreateOrConnectWithoutCartsInputObjectSchema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateOrConnectWithoutCartsInput>;
export const CartItemCreateOrConnectWithoutCartsInputObjectZodSchema = makeSchema();
