import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderCreateNestedOneWithoutOrder_itemsInputObjectSchema } from './OrderCreateNestedOneWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  price: z.number(),
  orders: z.lazy(() => OrderCreateNestedOneWithoutOrder_itemsInputObjectSchema)
}).strict();
export const OrderItemCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.OrderItemCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateWithoutProductsInput>;
export const OrderItemCreateWithoutProductsInputObjectZodSchema = makeSchema();
