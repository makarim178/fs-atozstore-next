import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const tagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TagScalarWhereWithAggregatesInput> = tagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TagScalarWhereWithAggregatesInput>;
export const TagScalarWhereWithAggregatesInputObjectZodSchema = tagscalarwherewithaggregatesinputSchema;
