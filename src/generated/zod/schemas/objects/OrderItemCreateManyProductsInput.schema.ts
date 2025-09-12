import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  order_id: z.string(),
  quantity: z.number().int(),
  price: z.number()
}).strict();
export const OrderItemCreateManyProductsInputObjectSchema: z.ZodType<Prisma.OrderItemCreateManyProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateManyProductsInput>;
export const OrderItemCreateManyProductsInputObjectZodSchema = makeSchema();
