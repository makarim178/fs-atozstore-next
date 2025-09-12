import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ImageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ImageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageOrderByWithRelationInput>;
export const ImageOrderByWithRelationInputObjectZodSchema = makeSchema();
