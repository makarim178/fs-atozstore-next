import { z } from 'zod';
export const OrderItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  order_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  price: z.number(),
  _count: z.object({
    id: z.number(),
    order_id: z.number(),
    product_id: z.number(),
    quantity: z.number(),
    price: z.number(),
    orders: z.number(),
    products: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable(),
    price: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable(),
    price: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    order_id: z.string().nullable(),
    product_id: z.string().nullable(),
    quantity: z.number().int().nullable(),
    price: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    order_id: z.string().nullable(),
    product_id: z.string().nullable(),
    quantity: z.number().int().nullable(),
    price: z.number().nullable()
  }).nullable().optional()
}));