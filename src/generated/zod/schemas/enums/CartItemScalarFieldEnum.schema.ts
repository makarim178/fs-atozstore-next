import { z } from 'zod';

export const CartItemScalarFieldEnumSchema = z.enum(['id', 'cart_id', 'product_id', 'quantity'])

export type CartItemScalarFieldEnum = z.infer<typeof CartItemScalarFieldEnumSchema>;