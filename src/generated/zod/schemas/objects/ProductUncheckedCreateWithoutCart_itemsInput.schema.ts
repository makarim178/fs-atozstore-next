import { z } from 'zod';
import type { Prisma } from '../../../prisma';
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
  images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  meta: z.lazy(() => MetaUncheckedCreateNestedOneWithoutProductInputObjectSchema).optional(),
  order_items: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductsInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
  unit_dimension: z.lazy(() => UnitDimensionUncheckedCreateNestedOneWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateWithoutCart_itemsInput>;
export const ProductUncheckedCreateWithoutCart_itemsInputObjectZodSchema = makeSchema();
