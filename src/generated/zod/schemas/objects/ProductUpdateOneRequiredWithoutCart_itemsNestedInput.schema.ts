import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutCart_itemsInputObjectSchema } from './ProductCreateWithoutCart_itemsInput.schema';
import { ProductUncheckedCreateWithoutCart_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutCart_itemsInput.schema';
import { ProductCreateOrConnectWithoutCart_itemsInputObjectSchema } from './ProductCreateOrConnectWithoutCart_itemsInput.schema';
import { ProductUpsertWithoutCart_itemsInputObjectSchema } from './ProductUpsertWithoutCart_itemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutCart_itemsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutCart_itemsInput.schema';
import { ProductUpdateWithoutCart_itemsInputObjectSchema } from './ProductUpdateWithoutCart_itemsInput.schema';
import { ProductUncheckedUpdateWithoutCart_itemsInputObjectSchema } from './ProductUncheckedUpdateWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutCart_itemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCart_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCart_itemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutCart_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutCart_itemsInputObjectSchema), z.lazy(() => ProductUpdateWithoutCart_itemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutCart_itemsInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutCart_itemsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCart_itemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCart_itemsNestedInput>;
export const ProductUpdateOneRequiredWithoutCart_itemsNestedInputObjectZodSchema = makeSchema();
