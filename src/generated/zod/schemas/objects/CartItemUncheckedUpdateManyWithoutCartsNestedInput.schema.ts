import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemCreateWithoutCartsInputObjectSchema } from './CartItemCreateWithoutCartsInput.schema';
import { CartItemUncheckedCreateWithoutCartsInputObjectSchema } from './CartItemUncheckedCreateWithoutCartsInput.schema';
import { CartItemCreateOrConnectWithoutCartsInputObjectSchema } from './CartItemCreateOrConnectWithoutCartsInput.schema';
import { CartItemUpsertWithWhereUniqueWithoutCartsInputObjectSchema } from './CartItemUpsertWithWhereUniqueWithoutCartsInput.schema';
import { CartItemCreateManyCartsInputEnvelopeObjectSchema } from './CartItemCreateManyCartsInputEnvelope.schema';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithWhereUniqueWithoutCartsInputObjectSchema } from './CartItemUpdateWithWhereUniqueWithoutCartsInput.schema';
import { CartItemUpdateManyWithWhereWithoutCartsInputObjectSchema } from './CartItemUpdateManyWithWhereWithoutCartsInput.schema';
import { CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartItemCreateWithoutCartsInputObjectSchema), z.lazy(() => CartItemCreateWithoutCartsInputObjectSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutCartsInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartItemCreateOrConnectWithoutCartsInputObjectSchema), z.lazy(() => CartItemCreateOrConnectWithoutCartsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CartItemUpsertWithWhereUniqueWithoutCartsInputObjectSchema), z.lazy(() => CartItemUpsertWithWhereUniqueWithoutCartsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartItemCreateManyCartsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CartItemUpdateWithWhereUniqueWithoutCartsInputObjectSchema), z.lazy(() => CartItemUpdateWithWhereUniqueWithoutCartsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CartItemUpdateManyWithWhereWithoutCartsInputObjectSchema), z.lazy(() => CartItemUpdateManyWithWhereWithoutCartsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CartItemUncheckedUpdateManyWithoutCartsNestedInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutCartsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutCartsNestedInput>;
export const CartItemUncheckedUpdateManyWithoutCartsNestedInputObjectZodSchema = makeSchema();
