import { z } from 'zod';
export const ImageUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  product_id: z.string(),
  url: z.string(),
  product: z.unknown()
}));