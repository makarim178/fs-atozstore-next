import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderCreateWithoutOrder_itemsInputObjectSchema } from './OrderCreateWithoutOrder_itemsInput.schema';
import { OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './OrderUncheckedCreateWithoutOrder_itemsInput.schema';
import { OrderCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './OrderCreateOrConnectWithoutOrder_itemsInput.schema';
import { OrderUpsertWithoutOrder_itemsInputObjectSchema } from './OrderUpsertWithoutOrder_itemsInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema } from './OrderUpdateToOneWithWhereWithoutOrder_itemsInput.schema';
import { OrderUpdateWithoutOrder_itemsInputObjectSchema } from './OrderUpdateWithoutOrder_itemsInput.schema';
import { OrderUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './OrderUncheckedUpdateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrder_itemsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutOrder_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema), z.lazy(() => OrderUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutOrder_itemsInputObjectSchema)]).optional()
}).strict();
export const OrderUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutOrder_itemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateOneRequiredWithoutOrder_itemsNestedInput>;
export const OrderUpdateOneRequiredWithoutOrder_itemsNestedInputObjectZodSchema = makeSchema();
