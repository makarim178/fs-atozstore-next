import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemCreateWithoutProductsInputObjectSchema } from './OrderItemCreateWithoutProductsInput.schema';
import { OrderItemUncheckedCreateWithoutProductsInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductsInput.schema';
import { OrderItemCreateOrConnectWithoutProductsInputObjectSchema } from './OrderItemCreateOrConnectWithoutProductsInput.schema';
import { OrderItemUpsertWithWhereUniqueWithoutProductsInputObjectSchema } from './OrderItemUpsertWithWhereUniqueWithoutProductsInput.schema';
import { OrderItemCreateManyProductsInputEnvelopeObjectSchema } from './OrderItemCreateManyProductsInputEnvelope.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithWhereUniqueWithoutProductsInputObjectSchema } from './OrderItemUpdateWithWhereUniqueWithoutProductsInput.schema';
import { OrderItemUpdateManyWithWhereWithoutProductsInputObjectSchema } from './OrderItemUpdateManyWithWhereWithoutProductsInput.schema';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductsInputObjectSchema), z.lazy(() => OrderItemCreateWithoutProductsInputObjectSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutProductsInputObjectSchema), z.lazy(() => OrderItemCreateOrConnectWithoutProductsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema), z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrderItemUpdateManyWithoutProductsNestedInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutProductsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateManyWithoutProductsNestedInput>;
export const OrderItemUpdateManyWithoutProductsNestedInputObjectZodSchema = makeSchema();
