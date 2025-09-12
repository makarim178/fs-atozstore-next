import { z } from 'zod';
export const UnitDimensionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  product_id: z.string(),
  weight: z.number(),
  unit: z.string(),
  height: z.number(),
  width: z.number(),
  depth: z.number(),
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