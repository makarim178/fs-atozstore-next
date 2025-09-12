import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutImagesInputObjectSchema } from './ProductCreateWithoutImagesInput.schema';
import { ProductUncheckedCreateWithoutImagesInputObjectSchema } from './ProductUncheckedCreateWithoutImagesInput.schema';
import { ProductCreateOrConnectWithoutImagesInputObjectSchema } from './ProductCreateOrConnectWithoutImagesInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutImagesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutImagesInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutImagesInput>;
export const ProductCreateNestedOneWithoutImagesInputObjectZodSchema = makeSchema();
