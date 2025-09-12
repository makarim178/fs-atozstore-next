import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderUpdateWithoutOrder_itemsInputObjectSchema } from './OrderUpdateWithoutOrder_itemsInput.schema';
import { OrderUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './OrderUncheckedUpdateWithoutOrder_itemsInput.schema';
import { OrderCreateWithoutOrder_itemsInputObjectSchema } from './OrderCreateWithoutOrder_itemsInput.schema';
import { OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './OrderUncheckedCreateWithoutOrder_itemsInput.schema';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrderUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutOrder_itemsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema)]),
  where: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict();
export const OrderUpsertWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpsertWithoutOrder_itemsInput>;
export const OrderUpsertWithoutOrder_itemsInputObjectZodSchema = makeSchema();
