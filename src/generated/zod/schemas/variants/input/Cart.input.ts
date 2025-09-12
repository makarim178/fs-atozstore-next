import { z } from 'zod';

// prettier-ignore
export const CartInputSchema = z.object({
    id: z.string(),
    session_id: z.string(),
    created_at: z.date().optional().nullable(),
    is_ordered: z.boolean().optional().nullable(),
    cart_items: z.array(z.unknown())
}).strict();

export type CartInputType = z.infer<typeof CartInputSchema>;
