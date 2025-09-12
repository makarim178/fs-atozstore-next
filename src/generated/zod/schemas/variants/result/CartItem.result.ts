import { z } from 'zod';

// prettier-ignore
export const CartItemResultSchema = z.object({
    id: z.string(),
    cart_id: z.string(),
    product_id: z.string(),
    quantity: z.number().int(),
    carts: z.unknown(),
    products: z.unknown()
}).strict();

export type CartItemResultType = z.infer<typeof CartItemResultSchema>;
