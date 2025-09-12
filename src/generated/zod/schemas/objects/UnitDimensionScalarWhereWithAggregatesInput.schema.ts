import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const unitdimensionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UnitDimensionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UnitDimensionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UnitDimensionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UnitDimensionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UnitDimensionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  weight: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  unit: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  height: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  width: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  depth: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
export const UnitDimensionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UnitDimensionScalarWhereWithAggregatesInput> = unitdimensionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UnitDimensionScalarWhereWithAggregatesInput>;
export const UnitDimensionScalarWhereWithAggregatesInputObjectZodSchema = unitdimensionscalarwherewithaggregatesinputSchema;
