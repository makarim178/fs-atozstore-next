import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutTagsInputObjectSchema } from './ProductUpdateWithoutTagsInput.schema';
import { ProductUncheckedUpdateWithoutTagsInputObjectSchema } from './ProductUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutTagsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutTagsInput>;
export const ProductUpdateToOneWithWhereWithoutTagsInputObjectZodSchema = makeSchema();
