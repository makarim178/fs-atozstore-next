import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutOrder_itemsInputObjectSchema } from './ProductCreateWithoutOrder_itemsInput.schema';
import { ProductUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutOrder_itemsInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutOrder_itemsInput>;
export const ProductCreateOrConnectWithoutOrder_itemsInputObjectZodSchema = makeSchema();
