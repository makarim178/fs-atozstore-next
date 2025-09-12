import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemCreateWithoutOrdersInputObjectSchema } from './OrderItemCreateWithoutOrdersInput.schema';
import { OrderItemUncheckedCreateWithoutOrdersInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrdersInput.schema';
import { OrderItemCreateOrConnectWithoutOrdersInputObjectSchema } from './OrderItemCreateOrConnectWithoutOrdersInput.schema';
import { OrderItemCreateManyOrdersInputEnvelopeObjectSchema } from './OrderItemCreateManyOrdersInputEnvelope.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemCreateWithoutOrdersInputObjectSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrdersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemCreateOrConnectWithoutOrdersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrdersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrderItemUncheckedCreateNestedManyWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrdersInput>;
export const OrderItemUncheckedCreateNestedManyWithoutOrdersInputObjectZodSchema = makeSchema();
