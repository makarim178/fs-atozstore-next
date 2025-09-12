import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderUpdateWithoutOrder_itemsInputObjectSchema } from './OrderUpdateWithoutOrder_itemsInput.schema';
import { OrderUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './OrderUncheckedUpdateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrderUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutOrder_itemsInputObjectSchema)])
}).strict();
export const OrderUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutOrder_itemsInput>;
export const OrderUpdateToOneWithWhereWithoutOrder_itemsInputObjectZodSchema = makeSchema();
