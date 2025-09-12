import { z } from 'zod';
export const ImageAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    product_id: z.number(),
    url: z.number(),
    product: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    product_id: z.string().nullable(),
    url: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    product_id: z.string().nullable(),
    url: z.string().nullable()
  }).nullable().optional()});