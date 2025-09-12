import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderCreateWithoutOrder_itemsInputObjectSchema } from './OrderCreateWithoutOrder_itemsInput.schema';
import { OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './OrderUncheckedCreateWithoutOrder_itemsInput.schema';
import { OrderCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './OrderCreateOrConnectWithoutOrder_itemsInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrder_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderCreateNestedOneWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateNestedOneWithoutOrder_itemsInput>;
export const OrderCreateNestedOneWithoutOrder_itemsInputObjectZodSchema = makeSchema();
