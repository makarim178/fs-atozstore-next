import { z } from 'zod';
export const CartUpsertResultSchema = z.object({
  id: z.string(),
  session_id: z.string(),
  created_at: z.date().optional(),
  is_ordered: z.boolean().optional(),
  cart_items: z.array(z.unknown())
});