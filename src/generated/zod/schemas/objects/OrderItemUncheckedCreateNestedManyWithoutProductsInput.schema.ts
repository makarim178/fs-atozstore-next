import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemCreateWithoutProductsInputObjectSchema } from './OrderItemCreateWithoutProductsInput.schema';
import { OrderItemUncheckedCreateWithoutProductsInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductsInput.schema';
import { OrderItemCreateOrConnectWithoutProductsInputObjectSchema } from './OrderItemCreateOrConnectWithoutProductsInput.schema';
import { OrderItemCreateManyProductsInputEnvelopeObjectSchema } from './OrderItemCreateManyProductsInputEnvelope.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductsInputObjectSchema), z.lazy(() => OrderItemCreateWithoutProductsInputObjectSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutProductsInputObjectSchema), z.lazy(() => OrderItemCreateOrConnectWithoutProductsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrderItemUncheckedCreateNestedManyWithoutProductsInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutProductsInput>;
export const OrderItemUncheckedCreateNestedManyWithoutProductsInputObjectZodSchema = makeSchema();
