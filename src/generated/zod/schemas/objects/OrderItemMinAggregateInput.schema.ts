import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order_id: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  price: z.literal(true).optional()
}).strict();
export const OrderItemMinAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemMinAggregateInputType>;
export const OrderItemMinAggregateInputObjectZodSchema = makeSchema();
