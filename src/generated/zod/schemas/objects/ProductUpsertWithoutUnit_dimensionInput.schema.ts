import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductUpdateWithoutUnit_dimensionInputObjectSchema } from './ProductUpdateWithoutUnit_dimensionInput.schema';
import { ProductUncheckedUpdateWithoutUnit_dimensionInputObjectSchema } from './ProductUncheckedUpdateWithoutUnit_dimensionInput.schema';
import { ProductCreateWithoutUnit_dimensionInputObjectSchema } from './ProductCreateWithoutUnit_dimensionInput.schema';
import { ProductUncheckedCreateWithoutUnit_dimensionInputObjectSchema } from './ProductUncheckedCreateWithoutUnit_dimensionInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutUnit_dimensionInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutUnit_dimensionInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutUnit_dimensionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutUnit_dimensionInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutUnit_dimensionInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutUnit_dimensionInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutUnit_dimensionInput>;
export const ProductUpsertWithoutUnit_dimensionInputObjectZodSchema = makeSchema();
