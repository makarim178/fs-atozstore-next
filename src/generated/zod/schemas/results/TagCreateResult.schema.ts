import { z } from 'zod';
export const TagCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  product_id: z.string(),
  product: z.unknown()
});