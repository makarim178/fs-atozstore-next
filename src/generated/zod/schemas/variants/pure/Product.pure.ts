import { z } from 'zod';

// prettier-ignore
export const ProductModelSchema = z.object({
    id: z.string(),
    sku: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    category_id: z.string(),
    brand_id: z.string(),
    price: z.number(),
    discount_percentage: z.number().nullable(),
    rating: z.number().nullable(),
    stock: z.number().int(),
    warranty_information: z.string().nullable(),
    shipping_information: z.string().nullable(),
    return_policy: z.string().nullable(),
    minimum_order_quantity: z.number().int().nullable(),
    isAvailable: z.boolean().nullable(),
    thumbnail: z.string().nullable(),
    created_at: z.date().nullable(),
    cart_items: z.array(z.unknown()),
    images: z.array(z.unknown()),
    meta: z.unknown().nullable(),
    order_items: z.array(z.unknown()),
    brand: z.unknown(),
    category: z.unknown(),
    reviews: z.array(z.unknown()),
    tags: z.array(z.unknown()),
    unit_dimension: z.unknown().nullable()
}).strict();

export type ProductModelType = z.infer<typeof ProductModelSchema>;
