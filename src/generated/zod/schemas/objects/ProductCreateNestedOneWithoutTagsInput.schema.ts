import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutTagsInputObjectSchema } from './ProductCreateWithoutTagsInput.schema';
import { ProductUncheckedCreateWithoutTagsInputObjectSchema } from './ProductUncheckedCreateWithoutTagsInput.schema';
import { ProductCreateOrConnectWithoutTagsInputObjectSchema } from './ProductCreateOrConnectWithoutTagsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutTagsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutTagsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutTagsInput>;
export const ProductCreateNestedOneWithoutTagsInputObjectZodSchema = makeSchema();
