import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutOrdersInputObjectSchema } from './OrderItemCreateWithoutOrdersInput.schema';
import { OrderItemUncheckedCreateWithoutOrdersInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderItemCreateWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const OrderItemCreateOrConnectWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateOrConnectWithoutOrdersInput>;
export const OrderItemCreateOrConnectWithoutOrdersInputObjectZodSchema = makeSchema();
