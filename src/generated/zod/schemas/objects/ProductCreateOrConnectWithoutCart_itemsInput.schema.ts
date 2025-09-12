import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutCart_itemsInputObjectSchema } from './ProductCreateWithoutCart_itemsInput.schema';
import { ProductUncheckedCreateWithoutCart_itemsInputObjectSchema } from './ProductUncheckedCreateWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutCart_itemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCart_itemsInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutCart_itemsInput>;
export const ProductCreateOrConnectWithoutCart_itemsInputObjectZodSchema = makeSchema();
