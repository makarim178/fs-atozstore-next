import { z } from 'zod';
export const MetaFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  barcode: z.string().optional(),
  qrcode: z.string().optional(),
  product_id: z.string(),
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