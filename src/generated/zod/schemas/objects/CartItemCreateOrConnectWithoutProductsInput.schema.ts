import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemCreateWithoutProductsInputObjectSchema } from './CartItemCreateWithoutProductsInput.schema';
import { CartItemUncheckedCreateWithoutProductsInputObjectSchema } from './CartItemUncheckedCreateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CartItemCreateWithoutProductsInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductsInputObjectSchema)])
}).strict();
export const CartItemCreateOrConnectWithoutProductsInputObjectSchema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateOrConnectWithoutProductsInput>;
export const CartItemCreateOrConnectWithoutProductsInputObjectZodSchema = makeSchema();
