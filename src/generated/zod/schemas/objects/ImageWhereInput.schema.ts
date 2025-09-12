import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const imagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const ImageWhereInputObjectSchema: z.ZodType<Prisma.ImageWhereInput> = imagewhereinputSchema as unknown as z.ZodType<Prisma.ImageWhereInput>;
export const ImageWhereInputObjectZodSchema = imagewhereinputSchema;
