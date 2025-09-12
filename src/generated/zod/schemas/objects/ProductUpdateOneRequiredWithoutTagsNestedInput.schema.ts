import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutTagsInputObjectSchema } from './ProductCreateWithoutTagsInput.schema';
import { ProductUncheckedCreateWithoutTagsInputObjectSchema } from './ProductUncheckedCreateWithoutTagsInput.schema';
import { ProductCreateOrConnectWithoutTagsInputObjectSchema } from './ProductCreateOrConnectWithoutTagsInput.schema';
import { ProductUpsertWithoutTagsInputObjectSchema } from './ProductUpsertWithoutTagsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutTagsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutTagsInput.schema';
import { ProductUpdateWithoutTagsInputObjectSchema } from './ProductUpdateWithoutTagsInput.schema';
import { ProductUncheckedUpdateWithoutTagsInputObjectSchema } from './ProductUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutTagsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutTagsInputObjectSchema), z.lazy(() => ProductUpdateWithoutTagsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutTagsInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutTagsNestedInput>;
export const ProductUpdateOneRequiredWithoutTagsNestedInputObjectZodSchema = makeSchema();
