import { z } from 'zod';
export const ReviewGroupByResultSchema = z.array(z.object({
  id: z.string(),
  product_id: z.string(),
  rating: z.number(),
  comment: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    product_id: z.number(),
    rating: z.number(),
    comment: z.number(),
    created_at: z.number(),
    product: z.number()
  }).optional(),
  _sum: z.object({
    rating: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    rating: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    product_id: z.string().nullable(),
    rating: z.number().nullable(),
    comment: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    product_id: z.string().nullable(),
    rating: z.number().nullable(),
    comment: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));