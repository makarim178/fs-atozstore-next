import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutReviewsInputObjectSchema } from './ProductUpdateWithoutReviewsInput.schema';
import { ProductUncheckedUpdateWithoutReviewsInputObjectSchema } from './ProductUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutReviewsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutReviewsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutReviewsInput>;
export const ProductUpdateToOneWithWhereWithoutReviewsInputObjectZodSchema = makeSchema();
