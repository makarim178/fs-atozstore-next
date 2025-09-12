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
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const productscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional(),
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
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const ProductScalarWhereInputObjectSchema: z.ZodType<Prisma.ProductScalarWhereInput> = productscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProductScalarWhereInput>;
export const ProductScalarWhereInputObjectZodSchema = productscalarwhereinputSchema;
