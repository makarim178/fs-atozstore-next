import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'sku', 'name', 'description', 'category_id', 'brand_id', 'price', 'discount_percentage', 'rating', 'stock', 'warranty_information', 'shipping_information', 'return_policy', 'minimum_order_quantity', 'isAvailable', 'thumbnail', 'created_at'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;