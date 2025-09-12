import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ImageCountOrderByAggregateInputObjectSchema } from './ImageCountOrderByAggregateInput.schema';
import { ImageMaxOrderByAggregateInputObjectSchema } from './ImageMaxOrderByAggregateInput.schema';
import { ImageMinOrderByAggregateInputObjectSchema } from './ImageMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  _count: z.lazy(() => ImageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ImageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ImageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ImageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ImageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageOrderByWithAggregationInput>;
export const ImageOrderByWithAggregationInputObjectZodSchema = makeSchema();
