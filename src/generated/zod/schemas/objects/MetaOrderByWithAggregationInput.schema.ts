import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MetaCountOrderByAggregateInputObjectSchema } from './MetaCountOrderByAggregateInput.schema';
import { MetaMaxOrderByAggregateInputObjectSchema } from './MetaMaxOrderByAggregateInput.schema';
import { MetaMinOrderByAggregateInputObjectSchema } from './MetaMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  barcode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  qrcode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  product_id: SortOrderSchema.optional(),
  _count: z.lazy(() => MetaCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MetaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MetaMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MetaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MetaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaOrderByWithAggregationInput>;
export const MetaOrderByWithAggregationInputObjectZodSchema = makeSchema();
