import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutImagesInputObjectSchema } from './ProductUpdateWithoutImagesInput.schema';
import { ProductUncheckedUpdateWithoutImagesInputObjectSchema } from './ProductUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutImagesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutImagesInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutImagesInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutImagesInput>;
export const ProductUpdateToOneWithWhereWithoutImagesInputObjectZodSchema = makeSchema();
