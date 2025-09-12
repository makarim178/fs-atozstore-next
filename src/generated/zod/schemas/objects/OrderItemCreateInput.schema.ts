import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderCreateNestedOneWithoutOrder_itemsInputObjectSchema } from './OrderCreateNestedOneWithoutOrder_itemsInput.schema';
import { ProductCreateNestedOneWithoutOrder_itemsInputObjectSchema } from './ProductCreateNestedOneWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  price: z.number(),
  orders: z.lazy(() => OrderCreateNestedOneWithoutOrder_itemsInputObjectSchema),
  products: z.lazy(() => ProductCreateNestedOneWithoutOrder_itemsInputObjectSchema)
}).strict();
export const OrderItemCreateInputObjectSchema: z.ZodType<Prisma.OrderItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateInput>;
export const OrderItemCreateInputObjectZodSchema = makeSchema();
