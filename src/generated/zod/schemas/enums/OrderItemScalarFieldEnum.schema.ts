import { z } from 'zod';

export const OrderItemScalarFieldEnumSchema = z.enum(['id', 'order_id', 'product_id', 'quantity', 'price'])

export type OrderItemScalarFieldEnum = z.infer<typeof OrderItemScalarFieldEnumSchema>;