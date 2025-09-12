import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  price: SortOrderSchema.optional(),
  discount_percentage: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  minimum_order_quantity: SortOrderSchema.optional()
}).strict();
export const ProductAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductAvgOrderByAggregateInput>;
export const ProductAvgOrderByAggregateInputObjectZodSchema = makeSchema();
