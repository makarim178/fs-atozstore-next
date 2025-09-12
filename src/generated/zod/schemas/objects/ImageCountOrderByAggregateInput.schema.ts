import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional()
}).strict();
export const ImageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ImageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCountOrderByAggregateInput>;
export const ImageCountOrderByAggregateInputObjectZodSchema = makeSchema();
