import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const metawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MetaWhereInputObjectSchema), z.lazy(() => MetaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MetaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MetaWhereInputObjectSchema), z.lazy(() => MetaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  barcode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  qrcode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const MetaWhereInputObjectSchema: z.ZodType<Prisma.MetaWhereInput> = metawhereinputSchema as unknown as z.ZodType<Prisma.MetaWhereInput>;
export const MetaWhereInputObjectZodSchema = metawhereinputSchema;
