import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductUpdateWithoutOrder_itemsInputObjectSchema } from './ProductUpdateWithoutOrder_itemsInput.schema';
import { ProductUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrder_itemsInput.schema';
import { ProductCreateWithoutOrder_itemsInputObjectSchema } from './ProductCreateWithoutOrder_itemsInput.schema';
import { ProductUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrder_itemsInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutOrder_itemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutOrder_itemsInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutOrder_itemsInput>;
export const ProductUpsertWithoutOrder_itemsInputObjectZodSchema = makeSchema();
