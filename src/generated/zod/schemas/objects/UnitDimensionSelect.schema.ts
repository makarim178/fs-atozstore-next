import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  weight: z.boolean().optional(),
  unit: z.boolean().optional(),
  height: z.boolean().optional(),
  width: z.boolean().optional(),
  depth: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const UnitDimensionSelectObjectSchema: z.ZodType<Prisma.UnitDimensionSelect> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionSelect>;
export const UnitDimensionSelectObjectZodSchema = makeSchema();
