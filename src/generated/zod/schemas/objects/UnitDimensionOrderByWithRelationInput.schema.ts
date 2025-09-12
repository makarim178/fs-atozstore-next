import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  depth: SortOrderSchema.optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UnitDimensionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UnitDimensionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionOrderByWithRelationInput>;
export const UnitDimensionOrderByWithRelationInputObjectZodSchema = makeSchema();
