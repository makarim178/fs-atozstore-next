import { z } from 'zod';
export const UnitDimensionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  product_id: z.string(),
  weight: z.number(),
  unit: z.string(),
  height: z.number(),
  width: z.number(),
  depth: z.number(),
  _count: z.object({
    id: z.number(),
    product_id: z.number(),
    weight: z.number(),
    unit: z.number(),
    height: z.number(),
    width: z.number(),
    depth: z.number(),
    product: z.number()
  }).optional(),
  _sum: z.object({
    weight: z.number().nullable(),
    height: z.number().nullable(),
    width: z.number().nullable(),
    depth: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    weight: z.number().nullable(),
    height: z.number().nullable(),
    width: z.number().nullable(),
    depth: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    product_id: z.string().nullable(),
    weight: z.number().nullable(),
    unit: z.string().nullable(),
    height: z.number().nullable(),
    width: z.number().nullable(),
    depth: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    product_id: z.string().nullable(),
    weight: z.number().nullable(),
    unit: z.string().nullable(),
    height: z.number().nullable(),
    width: z.number().nullable(),
    depth: z.number().nullable()
  }).nullable().optional()
}));