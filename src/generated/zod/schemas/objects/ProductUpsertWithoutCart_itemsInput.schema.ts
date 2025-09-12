import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductUpdateWithoutCart_itemsInputObjectSchema } from './ProductUpdateWithoutCart_itemsInput.schema';
import { ProductUncheckedUpdateWithoutCart_itemsInputObjectSchema } from './ProductUncheckedUpdateWithoutCart_itemsInput.schema';
import { ProductCreateWithoutCart_itemsInputObjectSchema } from './ProductCreateWithoutCart_itemsInput.schema';
import { ProductUncheckedCreateWithoutCart_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutCart_itemsInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutCart_itemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutCart_itemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutCart_itemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCart_itemsInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutCart_itemsInput>;
export const ProductUpsertWithoutCart_itemsInputObjectZodSchema = makeSchema();
