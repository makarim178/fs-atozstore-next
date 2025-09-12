import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutUnit_dimensionInputObjectSchema } from './ProductCreateWithoutUnit_dimensionInput.schema';
import { ProductUncheckedCreateWithoutUnit_dimensionInputObjectSchema } from './ProductUncheckedCreateWithoutUnit_dimensionInput.schema';
import { ProductCreateOrConnectWithoutUnit_dimensionInputObjectSchema } from './ProductCreateOrConnectWithoutUnit_dimensionInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutUnit_dimensionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutUnit_dimensionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutUnit_dimensionInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutUnit_dimensionInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutUnit_dimensionInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutUnit_dimensionInput>;
export const ProductCreateNestedOneWithoutUnit_dimensionInputObjectZodSchema = makeSchema();
