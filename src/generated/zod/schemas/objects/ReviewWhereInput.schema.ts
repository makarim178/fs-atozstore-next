import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const reviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  rating: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  comment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const ReviewWhereInputObjectSchema: z.ZodType<Prisma.ReviewWhereInput> = reviewwhereinputSchema as unknown as z.ZodType<Prisma.ReviewWhereInput>;
export const ReviewWhereInputObjectZodSchema = reviewwhereinputSchema;
