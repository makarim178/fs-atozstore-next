import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateNestedOneWithoutUnit_dimensionInputObjectSchema } from './ProductCreateNestedOneWithoutUnit_dimensionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  weight: z.number(),
  unit: z.string().optional(),
  height: z.number(),
  width: z.number(),
  depth: z.number(),
  product: z.lazy(() => ProductCreateNestedOneWithoutUnit_dimensionInputObjectSchema)
}).strict();
export const UnitDimensionCreateInputObjectSchema: z.ZodType<Prisma.UnitDimensionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionCreateInput>;
export const UnitDimensionCreateInputObjectZodSchema = makeSchema();
