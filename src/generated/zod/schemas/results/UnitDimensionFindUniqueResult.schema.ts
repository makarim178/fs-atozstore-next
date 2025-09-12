import { z } from 'zod';
export const UnitDimensionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  product_id: z.string(),
  weight: z.number(),
  unit: z.string(),
  height: z.number(),
  width: z.number(),
  depth: z.number(),
  product: z.unknown()
}));