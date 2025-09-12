import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartUpdateWithoutCart_itemsInputObjectSchema } from './CartUpdateWithoutCart_itemsInput.schema';
import { CartUncheckedUpdateWithoutCart_itemsInputObjectSchema } from './CartUncheckedUpdateWithoutCart_itemsInput.schema';
import { CartCreateWithoutCart_itemsInputObjectSchema } from './CartCreateWithoutCart_itemsInput.schema';
import { CartUncheckedCreateWithoutCart_itemsInputObjectSchema } from './CartUncheckedCreateWithoutCart_itemsInput.schema';
import { CartWhereInputObjectSchema } from './CartWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CartUpdateWithoutCart_itemsInputObjectSchema), z.lazy(() => CartUncheckedUpdateWithoutCart_itemsInputObjectSchema)]),
  create: z.union([z.lazy(() => CartCreateWithoutCart_itemsInputObjectSchema), z.lazy(() => CartUncheckedCreateWithoutCart_itemsInputObjectSchema)]),
  where: z.lazy(() => CartWhereInputObjectSchema).optional()
}).strict();
export const CartUpsertWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.CartUpsertWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUpsertWithoutCart_itemsInput>;
export const CartUpsertWithoutCart_itemsInputObjectZodSchema = makeSchema();
