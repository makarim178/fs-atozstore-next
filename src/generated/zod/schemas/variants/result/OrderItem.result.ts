import { z } from 'zod';

// prettier-ignore
export const OrderItemResultSchema = z.object({
    id: z.string(),
    order_id: z.string(),
    product_id: z.string(),
    quantity: z.number().int(),
    price: z.number(),
    orders: z.unknown(),
    products: z.unknown()
}).strict();

export type OrderItemResultType = z.infer<typeof OrderItemResultSchema>;
