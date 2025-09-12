import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  product_id: z.string(),
  quantity: z.number().int(),
  price: z.number()
}).strict();
export const OrderItemUncheckedCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrdersInput>;
export const OrderItemUncheckedCreateWithoutOrdersInputObjectZodSchema = makeSchema();
