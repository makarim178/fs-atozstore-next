import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutReviewsInputObjectSchema } from './ProductCreateWithoutReviewsInput.schema';
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from './ProductUncheckedCreateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutReviewsInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutReviewsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutReviewsInput>;
export const ProductCreateOrConnectWithoutReviewsInputObjectZodSchema = makeSchema();
