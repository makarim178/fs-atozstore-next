import { z } from 'zod';
export const TagAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    product_id: z.number(),
    product: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    product_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    product_id: z.string().nullable()
  }).nullable().optional()});