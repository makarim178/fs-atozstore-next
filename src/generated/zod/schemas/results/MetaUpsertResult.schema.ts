import { z } from 'zod';
export const MetaUpsertResultSchema = z.object({
  id: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  barcode: z.string().optional(),
  qrcode: z.string().optional(),
  product_id: z.string(),
  product: z.unknown()
});