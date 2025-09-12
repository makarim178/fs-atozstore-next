import { z } from 'zod';

// prettier-ignore
export const CartModelSchema = z.object({
    id: z.string(),
    session_id: z.string(),
    created_at: z.date().nullable(),
    is_ordered: z.boolean().nullable(),
    cart_items: z.array(z.unknown())
}).strict();

export type CartModelType = z.infer<typeof CartModelSchema>;
