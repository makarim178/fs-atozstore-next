import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  depth: SortOrderSchema.optional()
}).strict();
export const UnitDimensionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UnitDimensionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionMinOrderByAggregateInput>;
export const UnitDimensionMinOrderByAggregateInputObjectZodSchema = makeSchema();
