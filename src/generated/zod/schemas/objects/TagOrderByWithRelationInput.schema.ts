import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByWithRelationInput>;
export const TagOrderByWithRelationInputObjectZodSchema = makeSchema();
