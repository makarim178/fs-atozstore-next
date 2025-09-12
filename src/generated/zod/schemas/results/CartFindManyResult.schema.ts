import { z } from 'zod';
export const CartFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  session_id: z.string(),
  created_at: z.date().optional(),
  is_ordered: z.boolean().optional(),
  cart_items: z.array(z.unknown())
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