import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { TagWhereInputObjectSchema } from './TagWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TagWhereInputObjectSchema).optional(),
  some: z.lazy(() => TagWhereInputObjectSchema).optional(),
  none: z.lazy(() => TagWhereInputObjectSchema).optional()
}).strict();
export const TagListRelationFilterObjectSchema: z.ZodType<Prisma.TagListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TagListRelationFilter>;
export const TagListRelationFilterObjectZodSchema = makeSchema();
