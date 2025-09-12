import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductUpdateWithoutMetaInputObjectSchema } from './ProductUpdateWithoutMetaInput.schema';
import { ProductUncheckedUpdateWithoutMetaInputObjectSchema } from './ProductUncheckedUpdateWithoutMetaInput.schema';
import { ProductCreateWithoutMetaInputObjectSchema } from './ProductCreateWithoutMetaInput.schema';
import { ProductUncheckedCreateWithoutMetaInputObjectSchema } from './ProductUncheckedCreateWithoutMetaInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutMetaInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutMetaInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutMetaInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutMetaInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutMetaInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutMetaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutMetaInput>;
export const ProductUpsertWithoutMetaInputObjectZodSchema = makeSchema();
