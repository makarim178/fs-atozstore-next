import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  order_id: z.string(),
  quantity: z.number().int(),
  price: z.number()
}).strict();
export const OrderItemUncheckedCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedCreateWithoutProductsInput>;
export const OrderItemUncheckedCreateWithoutProductsInputObjectZodSchema = makeSchema();
