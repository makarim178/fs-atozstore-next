import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const tagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagWhereInputObjectSchema), z.lazy(() => TagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagWhereInputObjectSchema), z.lazy(() => TagWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const TagWhereInputObjectSchema: z.ZodType<Prisma.TagWhereInput> = tagwhereinputSchema as unknown as z.ZodType<Prisma.TagWhereInput>;
export const TagWhereInputObjectZodSchema = tagwhereinputSchema;
