import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemCreateWithoutProductsInputObjectSchema } from './CartItemCreateWithoutProductsInput.schema';
import { CartItemUncheckedCreateWithoutProductsInputObjectSchema } from './CartItemUncheckedCreateWithoutProductsInput.schema';
import { CartItemCreateOrConnectWithoutProductsInputObjectSchema } from './CartItemCreateOrConnectWithoutProductsInput.schema';
import { CartItemUpsertWithWhereUniqueWithoutProductsInputObjectSchema } from './CartItemUpsertWithWhereUniqueWithoutProductsInput.schema';
import { CartItemCreateManyProductsInputEnvelopeObjectSchema } from './CartItemCreateManyProductsInputEnvelope.schema';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithWhereUniqueWithoutProductsInputObjectSchema } from './CartItemUpdateWithWhereUniqueWithoutProductsInput.schema';
import { CartItemUpdateManyWithWhereWithoutProductsInputObjectSchema } from './CartItemUpdateManyWithWhereWithoutProductsInput.schema';
import { CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartItemCreateWithoutProductsInputObjectSchema), z.lazy(() => CartItemCreateWithoutProductsInputObjectSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutProductsInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartItemCreateOrConnectWithoutProductsInputObjectSchema), z.lazy(() => CartItemCreateOrConnectWithoutProductsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CartItemUpsertWithWhereUniqueWithoutProductsInputObjectSchema), z.lazy(() => CartItemUpsertWithWhereUniqueWithoutProductsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartItemCreateManyProductsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CartItemUpdateWithWhereUniqueWithoutProductsInputObjectSchema), z.lazy(() => CartItemUpdateWithWhereUniqueWithoutProductsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CartItemUpdateManyWithWhereWithoutProductsInputObjectSchema), z.lazy(() => CartItemUpdateManyWithWhereWithoutProductsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CartItemUpdateManyWithoutProductsNestedInputObjectSchema: z.ZodType<Prisma.CartItemUpdateManyWithoutProductsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateManyWithoutProductsNestedInput>;
export const CartItemUpdateManyWithoutProductsNestedInputObjectZodSchema = makeSchema();
