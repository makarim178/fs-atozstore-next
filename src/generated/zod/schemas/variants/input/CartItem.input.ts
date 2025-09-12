import { z } from 'zod';

// prettier-ignore
export const CartItemInputSchema = z.object({
    id: z.string(),
    cart_id: z.string(),
    product_id: z.string(),
    quantity: z.number().int(),
    carts: z.unknown(),
    products: z.unknown()
}).strict();

export type CartItemInputType = z.infer<typeof CartItemInputSchema>;
