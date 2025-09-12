import { z } from 'zod';
export const CartItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  cart_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  _count: z.object({
    id: z.number(),
    cart_id: z.number(),
    product_id: z.number(),
    quantity: z.number(),
    carts: z.number(),
    products: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    cart_id: z.string().nullable(),
    product_id: z.string().nullable(),
    quantity: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    cart_id: z.string().nullable(),
    product_id: z.string().nullable(),
    quantity: z.number().int().nullable()
  }).nullable().optional()
}));