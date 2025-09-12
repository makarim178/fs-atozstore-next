import { z } from 'zod';
export const ImageCreateManyResultSchema = z.object({
  count: z.number()
});