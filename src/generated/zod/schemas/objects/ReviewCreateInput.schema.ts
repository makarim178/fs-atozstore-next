import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema } from './ProductCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  product: z.lazy(() => ProductCreateNestedOneWithoutReviewsInputObjectSchema)
}).strict();
export const ReviewCreateInputObjectSchema: z.ZodType<Prisma.ReviewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateInput>;
export const ReviewCreateInputObjectZodSchema = makeSchema();
