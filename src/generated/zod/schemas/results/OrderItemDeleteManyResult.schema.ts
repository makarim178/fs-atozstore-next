import { z } from 'zod';
export const OrderItemDeleteManyResultSchema = z.object({
  count: z.number()
});