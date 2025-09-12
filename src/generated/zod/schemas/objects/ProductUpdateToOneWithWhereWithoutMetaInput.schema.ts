import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutMetaInputObjectSchema } from './ProductUpdateWithoutMetaInput.schema';
import { ProductUncheckedUpdateWithoutMetaInputObjectSchema } from './ProductUncheckedUpdateWithoutMetaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutMetaInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutMetaInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutMetaInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutMetaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutMetaInput>;
export const ProductUpdateToOneWithWhereWithoutMetaInputObjectZodSchema = makeSchema();
