import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const metascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MetaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MetaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MetaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MetaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MetaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  barcode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  qrcode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  product_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const MetaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MetaScalarWhereWithAggregatesInput> = metascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MetaScalarWhereWithAggregatesInput>;
export const MetaScalarWhereWithAggregatesInputObjectZodSchema = metascalarwherewithaggregatesinputSchema;
