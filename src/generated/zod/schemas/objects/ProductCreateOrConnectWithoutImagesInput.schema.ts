import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutImagesInputObjectSchema } from './ProductCreateWithoutImagesInput.schema';
import { ProductUncheckedCreateWithoutImagesInputObjectSchema } from './ProductUncheckedCreateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutImagesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutImagesInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutImagesInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutImagesInput>;
export const ProductCreateOrConnectWithoutImagesInputObjectZodSchema = makeSchema();
