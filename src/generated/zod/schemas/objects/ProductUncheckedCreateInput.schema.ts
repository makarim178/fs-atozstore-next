import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemUncheckedCreateNestedManyWithoutProductsInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutProductsInput.schema';
import { ImageUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutProductInput.schema';
import { MetaUncheckedCreateNestedOneWithoutProductInputObjectSchema } from './MetaUncheckedCreateNestedOneWithoutProductInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutProductsInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductsInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutProductInput.schema';
import { TagUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutProductInput.schema';
import { UnitDimensionUncheckedCreateNestedOneWithoutProductInputObjectSchema } from './UnitDimensionUncheckedCreateNestedOneWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sku: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  category_id: z.string(),
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
  created_at: z.coerce.date().optional().nullable(),
  cart_items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutProductsInputObjectSchema),
  images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProductInputObjectSchema),
  meta: z.lazy(() => MetaUncheckedCreateNestedOneWithoutProductInputObjectSchema).optional(),
  order_items: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductsInputObjectSchema),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductInputObjectSchema),
  unit_dimension: z.lazy(() => UnitDimensionUncheckedCreateNestedOneWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateInput>;
export const ProductUncheckedCreateInputObjectZodSchema = makeSchema();
