import { z } from 'zod';
export const OrderItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  order_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  price: z.number(),
  orders: z.unknown(),
  products: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});