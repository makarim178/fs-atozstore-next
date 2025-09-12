import { z } from 'zod';

// prettier-ignore
export const OrderItemModelSchema = z.object({
    id: z.string(),
    order_id: z.string(),
    product_id: z.string(),
    quantity: z.number().int(),
    price: z.number(),
    orders: z.unknown(),
    products: z.unknown()
}).strict();

export type OrderItemModelType = z.infer<typeof OrderItemModelSchema>;
