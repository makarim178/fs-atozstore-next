import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductUpdateWithoutReviewsInputObjectSchema } from './ProductUpdateWithoutReviewsInput.schema';
import { ProductUncheckedUpdateWithoutReviewsInputObjectSchema } from './ProductUncheckedUpdateWithoutReviewsInput.schema';
import { ProductCreateWithoutReviewsInputObjectSchema } from './ProductCreateWithoutReviewsInput.schema';
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from './ProductUncheckedCreateWithoutReviewsInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutReviewsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutReviewsInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutReviewsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutReviewsInput>;
export const ProductUpsertWithoutReviewsInputObjectZodSchema = makeSchema();
