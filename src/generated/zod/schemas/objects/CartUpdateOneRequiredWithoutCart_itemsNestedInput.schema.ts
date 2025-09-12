import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartCreateWithoutCart_itemsInputObjectSchema } from './CartCreateWithoutCart_itemsInput.schema';
import { CartUncheckedCreateWithoutCart_itemsInputObjectSchema } from './CartUncheckedCreateWithoutCart_itemsInput.schema';
import { CartCreateOrConnectWithoutCart_itemsInputObjectSchema } from './CartCreateOrConnectWithoutCart_itemsInput.schema';
import { CartUpsertWithoutCart_itemsInputObjectSchema } from './CartUpsertWithoutCart_itemsInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateToOneWithWhereWithoutCart_itemsInputObjectSchema } from './CartUpdateToOneWithWhereWithoutCart_itemsInput.schema';
import { CartUpdateWithoutCart_itemsInputObjectSchema } from './CartUpdateWithoutCart_itemsInput.schema';
import { CartUncheckedUpdateWithoutCart_itemsInputObjectSchema } from './CartUncheckedUpdateWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartCreateWithoutCart_itemsInputObjectSchema), z.lazy(() => CartUncheckedCreateWithoutCart_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CartCreateOrConnectWithoutCart_itemsInputObjectSchema).optional(),
  upsert: z.lazy(() => CartUpsertWithoutCart_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => CartWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CartUpdateToOneWithWhereWithoutCart_itemsInputObjectSchema), z.lazy(() => CartUpdateWithoutCart_itemsInputObjectSchema), z.lazy(() => CartUncheckedUpdateWithoutCart_itemsInputObjectSchema)]).optional()
}).strict();
export const CartUpdateOneRequiredWithoutCart_itemsNestedInputObjectSchema: z.ZodType<Prisma.CartUpdateOneRequiredWithoutCart_itemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUpdateOneRequiredWithoutCart_itemsNestedInput>;
export const CartUpdateOneRequiredWithoutCart_itemsNestedInputObjectZodSchema = makeSchema();
