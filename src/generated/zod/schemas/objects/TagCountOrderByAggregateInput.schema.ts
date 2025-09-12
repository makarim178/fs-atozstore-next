import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional()
}).strict();
export const TagCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCountOrderByAggregateInput>;
export const TagCountOrderByAggregateInputObjectZodSchema = makeSchema();
