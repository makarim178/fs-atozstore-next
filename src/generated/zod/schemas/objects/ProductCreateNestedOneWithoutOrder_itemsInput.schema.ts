import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutOrder_itemsInputObjectSchema } from './ProductCreateWithoutOrder_itemsInput.schema';
import { ProductUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrder_itemsInput.schema';
import { ProductCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './ProductCreateOrConnectWithoutOrder_itemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutOrder_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrder_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutOrder_itemsInput>;
export const ProductCreateNestedOneWithoutOrder_itemsInputObjectZodSchema = makeSchema();
