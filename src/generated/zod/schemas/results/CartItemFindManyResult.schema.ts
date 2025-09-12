import { z } from 'zod';
export const CartItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  cart_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  carts: z.unknown(),
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