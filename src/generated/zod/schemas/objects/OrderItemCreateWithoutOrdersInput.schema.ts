import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateNestedOneWithoutOrder_itemsInputObjectSchema } from './ProductCreateNestedOneWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  price: z.number(),
  products: z.lazy(() => ProductCreateNestedOneWithoutOrder_itemsInputObjectSchema)
}).strict();
export const OrderItemCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateWithoutOrdersInput>;
export const OrderItemCreateWithoutOrdersInputObjectZodSchema = makeSchema();
