import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema'

const tagscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereInputObjectSchema), z.lazy(() => TagScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereInputObjectSchema), z.lazy(() => TagScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional()
}).strict();
export const TagScalarWhereInputObjectSchema: z.ZodType<Prisma.TagScalarWhereInput> = tagscalarwhereinputSchema as unknown as z.ZodType<Prisma.TagScalarWhereInput>;
export const TagScalarWhereInputObjectZodSchema = tagscalarwhereinputSchema;
