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
export const MetaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MetaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaMaxOrderByAggregateInput>;
export const MetaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
