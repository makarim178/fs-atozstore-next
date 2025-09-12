import { z } from 'zod';
export const MetaCreateManyResultSchema = z.object({
  count: z.number()
});