import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutMetaInputObjectSchema } from './ProductCreateWithoutMetaInput.schema';
import { ProductUncheckedCreateWithoutMetaInputObjectSchema } from './ProductUncheckedCreateWithoutMetaInput.schema';
import { ProductCreateOrConnectWithoutMetaInputObjectSchema } from './ProductCreateOrConnectWithoutMetaInput.schema';
import { ProductUpsertWithoutMetaInputObjectSchema } from './ProductUpsertWithoutMetaInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutMetaInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutMetaInput.schema';
import { ProductUpdateWithoutMetaInputObjectSchema } from './ProductUpdateWithoutMetaInput.schema';
import { ProductUncheckedUpdateWithoutMetaInputObjectSchema } from './ProductUncheckedUpdateWithoutMetaInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutMetaInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutMetaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutMetaInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutMetaInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutMetaInputObjectSchema), z.lazy(() => ProductUpdateWithoutMetaInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutMetaInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutMetaNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutMetaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutMetaNestedInput>;
export const ProductUpdateOneRequiredWithoutMetaNestedInputObjectZodSchema = makeSchema();
