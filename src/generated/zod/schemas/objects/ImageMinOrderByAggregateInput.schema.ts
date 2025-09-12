import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional()
}).strict();
export const ImageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ImageMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageMinOrderByAggregateInput>;
export const ImageMinOrderByAggregateInputObjectZodSchema = makeSchema();
