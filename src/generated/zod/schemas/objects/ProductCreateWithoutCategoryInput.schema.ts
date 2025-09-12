import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemCreateNestedManyWithoutProductsInputObjectSchema } from './CartItemCreateNestedManyWithoutProductsInput.schema';
import { ImageCreateNestedManyWithoutProductInputObjectSchema } from './ImageCreateNestedManyWithoutProductInput.schema';
import { MetaCreateNestedOneWithoutProductInputObjectSchema } from './MetaCreateNestedOneWithoutProductInput.schema';
import { OrderItemCreateNestedManyWithoutProductsInputObjectSchema } from './OrderItemCreateNestedManyWithoutProductsInput.schema';
import { BrandCreateNestedOneWithoutProductsInputObjectSchema } from './BrandCreateNestedOneWithoutProductsInput.schema';
import { ReviewCreateNestedManyWithoutProductInputObjectSchema } from './ReviewCreateNestedManyWithoutProductInput.schema';
import { TagCreateNestedManyWithoutProductInputObjectSchema } from './TagCreateNestedManyWithoutProductInput.schema';
import { UnitDimensionCreateNestedOneWithoutProductInputObjectSchema } from './UnitDimensionCreateNestedOneWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sku: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
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
  created_at: z.coerce.date().optional().nullable(),
  cart_items: z.lazy(() => CartItemCreateNestedManyWithoutProductsInputObjectSchema).optional(),
  images: z.lazy(() => ImageCreateNestedManyWithoutProductInputObjectSchema).optional(),
  meta: z.lazy(() => MetaCreateNestedOneWithoutProductInputObjectSchema).optional(),
  order_items: z.lazy(() => OrderItemCreateNestedManyWithoutProductsInputObjectSchema).optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutProductInputObjectSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductInputObjectSchema).optional(),
  unit_dimension: z.lazy(() => UnitDimensionCreateNestedOneWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateWithoutCategoryInput>;
export const ProductCreateWithoutCategoryInputObjectZodSchema = makeSchema();
