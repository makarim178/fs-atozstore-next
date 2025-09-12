import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutOrder_itemsInputObjectSchema } from './ProductUpdateWithoutOrder_itemsInput.schema';
import { ProductUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutOrder_itemsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrder_itemsInput>;
export const ProductUpdateToOneWithWhereWithoutOrder_itemsInputObjectZodSchema = makeSchema();
