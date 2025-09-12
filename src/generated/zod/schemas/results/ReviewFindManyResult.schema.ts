import { z } from 'zod';
export const ReviewFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  product_id: z.string(),
  rating: z.number(),
  comment: z.string().optional(),
  created_at: z.date().optional(),
  product: z.unknown()
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