import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutOrder_itemsInputObjectSchema } from './OrderCreateWithoutOrder_itemsInput.schema';
import { OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './OrderUncheckedCreateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateOrConnectWithoutOrder_itemsInput>;
export const OrderCreateOrConnectWithoutOrder_itemsInputObjectZodSchema = makeSchema();
