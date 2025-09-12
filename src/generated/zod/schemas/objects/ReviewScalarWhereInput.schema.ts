import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const reviewscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  rating: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  comment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const ReviewScalarWhereInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereInput> = reviewscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereInput>;
export const ReviewScalarWhereInputObjectZodSchema = reviewscalarwhereinputSchema;
