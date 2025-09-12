import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutUnit_dimensionInputObjectSchema } from './ProductCreateWithoutUnit_dimensionInput.schema';
import { ProductUncheckedCreateWithoutUnit_dimensionInputObjectSchema } from './ProductUncheckedCreateWithoutUnit_dimensionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutUnit_dimensionInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutUnit_dimensionInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutUnit_dimensionInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutUnit_dimensionInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutUnit_dimensionInput>;
export const ProductCreateOrConnectWithoutUnit_dimensionInputObjectZodSchema = makeSchema();
