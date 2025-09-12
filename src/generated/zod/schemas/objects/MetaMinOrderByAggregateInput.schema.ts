import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  barcode: SortOrderSchema.optional(),
  qrcode: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional()
}).strict();
export const MetaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MetaMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaMinOrderByAggregateInput>;
export const MetaMinOrderByAggregateInputObjectZodSchema = makeSchema();
