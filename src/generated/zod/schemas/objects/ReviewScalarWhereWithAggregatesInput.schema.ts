import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const reviewscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  rating: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  comment: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const ReviewScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput> = reviewscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput>;
export const ReviewScalarWhereWithAggregatesInputObjectZodSchema = reviewscalarwherewithaggregatesinputSchema;
