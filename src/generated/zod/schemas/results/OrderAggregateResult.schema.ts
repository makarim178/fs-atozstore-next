import { z } from 'zod';
export const OrderAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    session_id: z.number(),
    total: z.number(),
    created_at: z.number(),
    order_items: z.number()
  }).optional(),
  _sum: z.object({
    total: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    total: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    session_id: z.string().nullable(),
    total: z.number().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    session_id: z.string().nullable(),
    total: z.number().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});