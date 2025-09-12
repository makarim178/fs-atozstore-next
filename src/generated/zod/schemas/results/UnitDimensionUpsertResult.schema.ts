import { z } from 'zod';
export const UnitDimensionUpsertResultSchema = z.object({
  id: z.string(),
  product_id: z.string(),
  weight: z.number(),
  unit: z.string(),
  height: z.number(),
  width: z.number(),
  depth: z.number(),
  product: z.unknown()
});