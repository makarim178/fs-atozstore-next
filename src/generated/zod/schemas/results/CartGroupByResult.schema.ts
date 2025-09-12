import { z } from 'zod';
export const CartGroupByResultSchema = z.array(z.object({
  id: z.string(),
  session_id: z.string(),
  created_at: z.date(),
  is_ordered: z.boolean(),
  _count: z.object({
    id: z.number(),
    session_id: z.number(),
    created_at: z.number(),
    is_ordered: z.number(),
    cart_items: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    session_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    session_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));