import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const BrandOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BrandOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandOrderByWithRelationInput>;
export const BrandOrderByWithRelationInputObjectZodSchema = makeSchema();
