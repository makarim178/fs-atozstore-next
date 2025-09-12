import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutReviewsInputObjectSchema } from './ProductCreateWithoutReviewsInput.schema';
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from './ProductUncheckedCreateWithoutReviewsInput.schema';
import { ProductCreateOrConnectWithoutReviewsInputObjectSchema } from './ProductCreateOrConnectWithoutReviewsInput.schema';
import { ProductUpsertWithoutReviewsInputObjectSchema } from './ProductUpsertWithoutReviewsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutReviewsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutReviewsInput.schema';
import { ProductUpdateWithoutReviewsInputObjectSchema } from './ProductUpdateWithoutReviewsInput.schema';
import { ProductUncheckedUpdateWithoutReviewsInputObjectSchema } from './ProductUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutReviewsInputObjectSchema), z.lazy(() => ProductUpdateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutReviewsInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput>;
export const ProductUpdateOneRequiredWithoutReviewsNestedInputObjectZodSchema = makeSchema();
