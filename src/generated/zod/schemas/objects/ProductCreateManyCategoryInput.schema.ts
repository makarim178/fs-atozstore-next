import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sku: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
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
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const ProductCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateManyCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyCategoryInput>;
export const ProductCreateManyCategoryInputObjectZodSchema = makeSchema();
