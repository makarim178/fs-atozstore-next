import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutCart_itemsInputObjectSchema } from './ProductUpdateWithoutCart_itemsInput.schema';
import { ProductUncheckedUpdateWithoutCart_itemsInputObjectSchema } from './ProductUncheckedUpdateWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutCart_itemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutCart_itemsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutCart_itemsInput>;
export const ProductUpdateToOneWithWhereWithoutCart_itemsInputObjectZodSchema = makeSchema();
