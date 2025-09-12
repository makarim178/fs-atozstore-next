import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutTagsInputObjectSchema } from './ProductCreateWithoutTagsInput.schema';
import { ProductUncheckedCreateWithoutTagsInputObjectSchema } from './ProductUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutTagsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutTagsInput>;
export const ProductCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
