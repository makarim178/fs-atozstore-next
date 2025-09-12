import { z } from 'zod';
export const TagDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  product_id: z.string(),
  product: z.unknown()
}));