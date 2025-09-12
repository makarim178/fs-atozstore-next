import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  product_id: z.string(),
  quantity: z.number().int(),
  price: z.number()
}).strict();
export const OrderItemCreateManyOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemCreateManyOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateManyOrdersInput>;
export const OrderItemCreateManyOrdersInputObjectZodSchema = makeSchema();
