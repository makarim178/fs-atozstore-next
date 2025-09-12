import { z } from 'zod';

// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.string(),
    sku: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    category_id: z.string(),
    brand_id: z.string(),
    price: z.number(),
    discount_percentage: z.number().optional().nullable(),
    rating: z.number().optional().nullable(),
    stock: z.number().int(),
    warranty_information: z.string().optional().nullable(),
    shipping_information: z.string().optional().nullable(),
    return_policy: z.string().optional().nullable(),
    minimum_order_quantity: z.number().int().optional().nullable(),
    isAvailable: z.boolean().optional().nullable(),
    thumbnail: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    cart_items: z.array(z.unknown()),
    images: z.array(z.unknown()),
    meta: z.unknown().optional().nullable(),
    order_items: z.array(z.unknown()),
    brand: z.unknown(),
    category: z.unknown(),
    reviews: z.array(z.unknown()),
    tags: z.array(z.unknown()),
    unit_dimension: z.unknown().optional().nullable()
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
