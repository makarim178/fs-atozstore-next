import { z } from 'zod';
export const ImageDeleteManyResultSchema = z.object({
  count: z.number()
});