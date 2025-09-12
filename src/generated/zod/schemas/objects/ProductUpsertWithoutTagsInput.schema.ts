import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductUpdateWithoutTagsInputObjectSchema } from './ProductUpdateWithoutTagsInput.schema';
import { ProductUncheckedUpdateWithoutTagsInputObjectSchema } from './ProductUncheckedUpdateWithoutTagsInput.schema';
import { ProductCreateWithoutTagsInputObjectSchema } from './ProductCreateWithoutTagsInput.schema';
import { ProductUncheckedCreateWithoutTagsInputObjectSchema } from './ProductUncheckedCreateWithoutTagsInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutTagsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutTagsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutTagsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutTagsInput>;
export const ProductUpsertWithoutTagsInputObjectZodSchema = makeSchema();
