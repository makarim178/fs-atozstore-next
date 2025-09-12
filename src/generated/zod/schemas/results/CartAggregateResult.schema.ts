import { z } from 'zod';
export const CartAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});