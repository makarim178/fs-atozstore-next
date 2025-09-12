import { z } from 'zod';
export const ReviewCreateResultSchema = z.object({
  id: z.string(),
  product_id: z.string(),
  rating: z.number(),
  comment: z.string().optional(),
  created_at: z.date().optional(),
  product: z.unknown()
});