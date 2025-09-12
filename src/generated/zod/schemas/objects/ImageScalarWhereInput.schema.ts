import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema'

const imagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ImageScalarWhereInputObjectSchema: z.ZodType<Prisma.ImageScalarWhereInput> = imagescalarwhereinputSchema as unknown as z.ZodType<Prisma.ImageScalarWhereInput>;
export const ImageScalarWhereInputObjectZodSchema = imagescalarwhereinputSchema;
