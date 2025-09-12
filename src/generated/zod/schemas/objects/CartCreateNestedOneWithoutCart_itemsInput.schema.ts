import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartCreateWithoutCart_itemsInputObjectSchema } from './CartCreateWithoutCart_itemsInput.schema';
import { CartUncheckedCreateWithoutCart_itemsInputObjectSchema } from './CartUncheckedCreateWithoutCart_itemsInput.schema';
import { CartCreateOrConnectWithoutCart_itemsInputObjectSchema } from './CartCreateOrConnectWithoutCart_itemsInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartCreateWithoutCart_itemsInputObjectSchema), z.lazy(() => CartUncheckedCreateWithoutCart_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CartCreateOrConnectWithoutCart_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => CartWhereUniqueInputObjectSchema).optional()
}).strict();
export const CartCreateNestedOneWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.CartCreateNestedOneWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateNestedOneWithoutCart_itemsInput>;
export const CartCreateNestedOneWithoutCart_itemsInputObjectZodSchema = makeSchema();
