import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  sku: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  category_id: z.literal(true).optional(),
  brand_id: z.literal(true).optional(),
  price: z.literal(true).optional(),
  discount_percentage: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  warranty_information: z.literal(true).optional(),
  shipping_information: z.literal(true).optional(),
  return_policy: z.literal(true).optional(),
  minimum_order_quantity: z.literal(true).optional(),
  isAvailable: z.literal(true).optional(),
  thumbnail: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ProductMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductMinAggregateInputType>;
export const ProductMinAggregateInputObjectZodSchema = makeSchema();
