import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const imagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ImageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ImageScalarWhereWithAggregatesInput> = imagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ImageScalarWhereWithAggregatesInput>;
export const ImageScalarWhereWithAggregatesInputObjectZodSchema = imagescalarwherewithaggregatesinputSchema;
