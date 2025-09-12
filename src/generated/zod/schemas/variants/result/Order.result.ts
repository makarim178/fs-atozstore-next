import { z } from 'zod';

// prettier-ignore
export const OrderResultSchema = z.object({
    id: z.string(),
    session_id: z.string(),
    total: z.number(),
    created_at: z.date().nullable(),
    order_items: z.array(z.unknown())
}).strict();

export type OrderResultType = z.infer<typeof OrderResultSchema>;
