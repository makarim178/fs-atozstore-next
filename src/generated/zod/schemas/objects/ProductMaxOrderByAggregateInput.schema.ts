import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sku: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  category_id: SortOrderSchema.optional(),
  brand_id: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discount_percentage: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  warranty_information: SortOrderSchema.optional(),
  shipping_information: SortOrderSchema.optional(),
  return_policy: SortOrderSchema.optional(),
  minimum_order_quantity: SortOrderSchema.optional(),
  isAvailable: SortOrderSchema.optional(),
  thumbnail: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ProductMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductMaxOrderByAggregateInput>;
export const ProductMaxOrderByAggregateInputObjectZodSchema = makeSchema();
