import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NestedBoolNullableFilterObjectSchema } from './NestedBoolNullableFilter.schema'

const makeSchema = () => z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([z.boolean(), z.lazy(() => NestedBoolNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const BoolNullableFilterObjectSchema: z.ZodType<Prisma.BoolNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.BoolNullableFilter>;
export const BoolNullableFilterObjectZodSchema = makeSchema();
