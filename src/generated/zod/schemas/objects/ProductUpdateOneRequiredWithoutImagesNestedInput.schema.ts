import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutImagesInputObjectSchema } from './ProductCreateWithoutImagesInput.schema';
import { ProductUncheckedCreateWithoutImagesInputObjectSchema } from './ProductUncheckedCreateWithoutImagesInput.schema';
import { ProductCreateOrConnectWithoutImagesInputObjectSchema } from './ProductCreateOrConnectWithoutImagesInput.schema';
import { ProductUpsertWithoutImagesInputObjectSchema } from './ProductUpsertWithoutImagesInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutImagesInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutImagesInput.schema';
import { ProductUpdateWithoutImagesInputObjectSchema } from './ProductUpdateWithoutImagesInput.schema';
import { ProductUncheckedUpdateWithoutImagesInputObjectSchema } from './ProductUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutImagesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutImagesInputObjectSchema), z.lazy(() => ProductUpdateWithoutImagesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutImagesInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutImagesNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutImagesNestedInput>;
export const ProductUpdateOneRequiredWithoutImagesNestedInputObjectZodSchema = makeSchema();
