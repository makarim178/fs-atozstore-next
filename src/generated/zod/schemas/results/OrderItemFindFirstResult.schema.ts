import { z } from 'zod';
export const OrderItemFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  order_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  price: z.number(),
  orders: z.unknown(),
  products: z.unknown()
}));