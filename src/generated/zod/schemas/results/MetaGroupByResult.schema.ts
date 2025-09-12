import { z } from 'zod';
export const MetaGroupByResultSchema = z.array(z.object({
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  barcode: z.string(),
  qrcode: z.string(),
  product_id: z.string(),
  _count: z.object({
    id: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    barcode: z.number(),
    qrcode: z.number(),
    product_id: z.number(),
    product: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    barcode: z.string().nullable(),
    qrcode: z.string().nullable(),
    product_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    barcode: z.string().nullable(),
    qrcode: z.string().nullable(),
    product_id: z.string().nullable()
  }).nullable().optional()
}));