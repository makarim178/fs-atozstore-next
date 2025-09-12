import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutUnit_dimensionInputObjectSchema } from './ProductUpdateWithoutUnit_dimensionInput.schema';
import { ProductUncheckedUpdateWithoutUnit_dimensionInputObjectSchema } from './ProductUncheckedUpdateWithoutUnit_dimensionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutUnit_dimensionInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutUnit_dimensionInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutUnit_dimensionInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutUnit_dimensionInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutUnit_dimensionInput>;
export const ProductUpdateToOneWithWhereWithoutUnit_dimensionInputObjectZodSchema = makeSchema();
