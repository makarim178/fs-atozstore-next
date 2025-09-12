import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UnitDimensionCountOrderByAggregateInputObjectSchema } from './UnitDimensionCountOrderByAggregateInput.schema';
import { UnitDimensionAvgOrderByAggregateInputObjectSchema } from './UnitDimensionAvgOrderByAggregateInput.schema';
import { UnitDimensionMaxOrderByAggregateInputObjectSchema } from './UnitDimensionMaxOrderByAggregateInput.schema';
import { UnitDimensionMinOrderByAggregateInputObjectSchema } from './UnitDimensionMinOrderByAggregateInput.schema';
import { UnitDimensionSumOrderByAggregateInputObjectSchema } from './UnitDimensionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  depth: SortOrderSchema.optional(),
  _count: z.lazy(() => UnitDimensionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UnitDimensionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UnitDimensionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UnitDimensionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UnitDimensionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UnitDimensionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UnitDimensionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionOrderByWithAggregationInput>;
export const UnitDimensionOrderByWithAggregationInputObjectZodSchema = makeSchema();
