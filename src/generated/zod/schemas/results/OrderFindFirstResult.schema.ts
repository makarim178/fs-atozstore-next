import { z } from 'zod';
export const OrderFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  session_id: z.string(),
  total: z.number(),
  created_at: z.date().optional(),
  order_items: z.array(z.unknown())
}));