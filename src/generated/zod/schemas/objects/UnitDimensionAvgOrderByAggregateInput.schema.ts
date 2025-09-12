import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  weight: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  depth: SortOrderSchema.optional()
}).strict();
export const UnitDimensionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UnitDimensionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionAvgOrderByAggregateInput>;
export const UnitDimensionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
