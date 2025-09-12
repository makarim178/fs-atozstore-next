import { z } from 'zod';
export const CartItemUpsertResultSchema = z.object({
  id: z.string(),
  cart_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  carts: z.unknown(),
  products: z.unknown()
});