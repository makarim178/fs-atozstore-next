import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutCart_itemsInputObjectSchema } from './ProductCreateWithoutCart_itemsInput.schema';
import { ProductUncheckedCreateWithoutCart_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutCart_itemsInput.schema';
import { ProductCreateOrConnectWithoutCart_itemsInputObjectSchema } from './ProductCreateOrConnectWithoutCart_itemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutCart_itemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCart_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCart_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutCart_itemsInput>;
export const ProductCreateNestedOneWithoutCart_itemsInputObjectZodSchema = makeSchema();
