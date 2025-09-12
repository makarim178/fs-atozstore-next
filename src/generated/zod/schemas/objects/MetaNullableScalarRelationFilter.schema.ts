import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { MetaWhereInputObjectSchema } from './MetaWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MetaWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MetaWhereInputObjectSchema).optional().nullable()
}).strict();
export const MetaNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MetaNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MetaNullableScalarRelationFilter>;
export const MetaNullableScalarRelationFilterObjectZodSchema = makeSchema();
