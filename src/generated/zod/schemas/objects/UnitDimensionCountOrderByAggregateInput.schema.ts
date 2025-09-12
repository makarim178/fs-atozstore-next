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
export const UnitDimensionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UnitDimensionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionCountOrderByAggregateInput>;
export const UnitDimensionCountOrderByAggregateInputObjectZodSchema = makeSchema();
