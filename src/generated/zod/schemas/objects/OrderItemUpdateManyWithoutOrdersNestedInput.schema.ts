import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemCreateWithoutOrdersInputObjectSchema } from './OrderItemCreateWithoutOrdersInput.schema';
import { OrderItemUncheckedCreateWithoutOrdersInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrdersInput.schema';
import { OrderItemCreateOrConnectWithoutOrdersInputObjectSchema } from './OrderItemCreateOrConnectWithoutOrdersInput.schema';
import { OrderItemUpsertWithWhereUniqueWithoutOrdersInputObjectSchema } from './OrderItemUpsertWithWhereUniqueWithoutOrdersInput.schema';
import { OrderItemCreateManyOrdersInputEnvelopeObjectSchema } from './OrderItemCreateManyOrdersInputEnvelope.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithWhereUniqueWithoutOrdersInputObjectSchema } from './OrderItemUpdateWithWhereUniqueWithoutOrdersInput.schema';
import { OrderItemUpdateManyWithWhereWithoutOrdersInputObjectSchema } from './OrderItemUpdateManyWithWhereWithoutOrdersInput.schema';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemCreateWithoutOrdersInputObjectSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrdersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemCreateOrConnectWithoutOrdersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutOrdersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrdersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutOrdersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderItemUpdateManyWithWhereWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUpdateManyWithWhereWithoutOrdersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema), z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrderItemUpdateManyWithoutOrdersNestedInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateManyWithoutOrdersNestedInput>;
export const OrderItemUpdateManyWithoutOrdersNestedInputObjectZodSchema = makeSchema();
