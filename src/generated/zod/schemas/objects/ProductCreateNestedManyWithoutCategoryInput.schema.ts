import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutCategoryInputObjectSchema } from './ProductCreateWithoutCategoryInput.schema';
import { ProductUncheckedCreateWithoutCategoryInputObjectSchema } from './ProductUncheckedCreateWithoutCategoryInput.schema';
import { ProductCreateOrConnectWithoutCategoryInputObjectSchema } from './ProductCreateOrConnectWithoutCategoryInput.schema';
import { ProductCreateManyCategoryInputEnvelopeObjectSchema } from './ProductCreateManyCategoryInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutCategoryInputObjectSchema), z.lazy(() => ProductCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedManyWithoutCategoryInput>;
export const ProductCreateNestedManyWithoutCategoryInputObjectZodSchema = makeSchema();
