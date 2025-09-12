import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutCart_itemsInputObjectSchema } from './CartCreateWithoutCart_itemsInput.schema';
import { CartUncheckedCreateWithoutCart_itemsInputObjectSchema } from './CartUncheckedCreateWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CartCreateWithoutCart_itemsInputObjectSchema), z.lazy(() => CartUncheckedCreateWithoutCart_itemsInputObjectSchema)])
}).strict();
export const CartCreateOrConnectWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.CartCreateOrConnectWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateOrConnectWithoutCart_itemsInput>;
export const CartCreateOrConnectWithoutCart_itemsInputObjectZodSchema = makeSchema();
