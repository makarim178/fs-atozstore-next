import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UnitDimensionWhereInputObjectSchema } from './UnitDimensionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UnitDimensionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => UnitDimensionWhereInputObjectSchema).optional().nullable()
}).strict();
export const UnitDimensionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UnitDimensionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionNullableScalarRelationFilter>;
export const UnitDimensionNullableScalarRelationFilterObjectZodSchema = makeSchema();
