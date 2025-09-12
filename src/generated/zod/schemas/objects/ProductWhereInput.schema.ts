import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema';
import { ImageListRelationFilterObjectSchema } from './ImageListRelationFilter.schema';
import { MetaNullableScalarRelationFilterObjectSchema } from './MetaNullableScalarRelationFilter.schema';
import { MetaWhereInputObjectSchema } from './MetaWhereInput.schema';
import { OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';
import { BrandScalarRelationFilterObjectSchema } from './BrandScalarRelationFilter.schema';
import { BrandWhereInputObjectSchema } from './BrandWhereInput.schema';
import { CategoryScalarRelationFilterObjectSchema } from './CategoryScalarRelationFilter.schema';
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { TagListRelationFilterObjectSchema } from './TagListRelationFilter.schema';
import { UnitDimensionNullableScalarRelationFilterObjectSchema } from './UnitDimensionNullableScalarRelationFilter.schema';
import { UnitDimensionWhereInputObjectSchema } from './UnitDimensionWhereInput.schema'

const productwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema), z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  sku: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  category_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  brand_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  discount_percentage: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()]).optional().nullable(),
  rating: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()]).optional().nullable(),
  stock: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  warranty_information: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  shipping_information: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  return_policy: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  minimum_order_quantity: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  isAvailable: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  thumbnail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  cart_items: z.lazy(() => CartItemListRelationFilterObjectSchema).optional(),
  images: z.lazy(() => ImageListRelationFilterObjectSchema).optional(),
  meta: z.union([z.lazy(() => MetaNullableScalarRelationFilterObjectSchema), z.lazy(() => MetaWhereInputObjectSchema)]).optional(),
  order_items: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional(),
  brand: z.union([z.lazy(() => BrandScalarRelationFilterObjectSchema), z.lazy(() => BrandWhereInputObjectSchema)]).optional(),
  category: z.union([z.lazy(() => CategoryScalarRelationFilterObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
  unit_dimension: z.union([z.lazy(() => UnitDimensionNullableScalarRelationFilterObjectSchema), z.lazy(() => UnitDimensionWhereInputObjectSchema)]).optional()
}).strict();
export const ProductWhereInputObjectSchema: z.ZodType<Prisma.ProductWhereInput> = productwhereinputSchema as unknown as z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectZodSchema = productwhereinputSchema;
