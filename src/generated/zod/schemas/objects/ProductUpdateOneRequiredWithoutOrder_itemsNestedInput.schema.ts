import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutOrder_itemsInputObjectSchema } from './ProductCreateWithoutOrder_itemsInput.schema';
import { ProductUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrder_itemsInput.schema';
import { ProductCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './ProductCreateOrConnectWithoutOrder_itemsInput.schema';
import { ProductUpsertWithoutOrder_itemsInputObjectSchema } from './ProductUpsertWithoutOrder_itemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutOrder_itemsInput.schema';
import { ProductUpdateWithoutOrder_itemsInputObjectSchema } from './ProductUpdateWithoutOrder_itemsInput.schema';
import { ProductUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutOrder_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrder_itemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutOrder_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema), z.lazy(() => ProductUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutOrder_itemsInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrder_itemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrder_itemsNestedInput>;
export const ProductUpdateOneRequiredWithoutOrder_itemsNestedInputObjectZodSchema = makeSchema();
