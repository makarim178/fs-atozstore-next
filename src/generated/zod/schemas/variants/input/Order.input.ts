import { z } from 'zod';

// prettier-ignore
export const OrderInputSchema = z.object({
    id: z.string(),
    session_id: z.string(),
    total: z.number(),
    created_at: z.date().optional().nullable(),
    order_items: z.array(z.unknown())
}).strict();

export type OrderInputType = z.infer<typeof OrderInputSchema>;
