import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutProductsInputObjectSchema } from './OrderItemCreateWithoutProductsInput.schema';
import { OrderItemUncheckedCreateWithoutProductsInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductsInputObjectSchema)])
}).strict();
export const OrderItemCreateOrConnectWithoutProductsInputObjectSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductsInput>;
export const OrderItemCreateOrConnectWithoutProductsInputObjectZodSchema = makeSchema();
