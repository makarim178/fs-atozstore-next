import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const unitdimensionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UnitDimensionWhereInputObjectSchema), z.lazy(() => UnitDimensionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UnitDimensionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UnitDimensionWhereInputObjectSchema), z.lazy(() => UnitDimensionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  weight: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  unit: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  height: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  width: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  depth: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const UnitDimensionWhereInputObjectSchema: z.ZodType<Prisma.UnitDimensionWhereInput> = unitdimensionwhereinputSchema as unknown as z.ZodType<Prisma.UnitDimensionWhereInput>;
export const UnitDimensionWhereInputObjectZodSchema = unitdimensionwhereinputSchema;
