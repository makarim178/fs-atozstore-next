import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  order_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  price: z.number()
}).strict();
export const OrderItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedCreateInput>;
export const OrderItemUncheckedCreateInputObjectZodSchema = makeSchema();
