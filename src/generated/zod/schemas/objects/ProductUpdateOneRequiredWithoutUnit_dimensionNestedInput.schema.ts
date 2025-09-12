import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutUnit_dimensionInputObjectSchema } from './ProductCreateWithoutUnit_dimensionInput.schema';
import { ProductUncheckedCreateWithoutUnit_dimensionInputObjectSchema } from './ProductUncheckedCreateWithoutUnit_dimensionInput.schema';
import { ProductCreateOrConnectWithoutUnit_dimensionInputObjectSchema } from './ProductCreateOrConnectWithoutUnit_dimensionInput.schema';
import { ProductUpsertWithoutUnit_dimensionInputObjectSchema } from './ProductUpsertWithoutUnit_dimensionInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutUnit_dimensionInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutUnit_dimensionInput.schema';
import { ProductUpdateWithoutUnit_dimensionInputObjectSchema } from './ProductUpdateWithoutUnit_dimensionInput.schema';
import { ProductUncheckedUpdateWithoutUnit_dimensionInputObjectSchema } from './ProductUncheckedUpdateWithoutUnit_dimensionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutUnit_dimensionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutUnit_dimensionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutUnit_dimensionInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutUnit_dimensionInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutUnit_dimensionInputObjectSchema), z.lazy(() => ProductUpdateWithoutUnit_dimensionInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutUnit_dimensionInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutUnit_dimensionNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutUnit_dimensionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutUnit_dimensionNestedInput>;
export const ProductUpdateOneRequiredWithoutUnit_dimensionNestedInputObjectZodSchema = makeSchema();
