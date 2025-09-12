import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateWithoutMetaInputObjectSchema } from './ProductCreateWithoutMetaInput.schema';
import { ProductUncheckedCreateWithoutMetaInputObjectSchema } from './ProductUncheckedCreateWithoutMetaInput.schema';
import { ProductCreateOrConnectWithoutMetaInputObjectSchema } from './ProductCreateOrConnectWithoutMetaInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutMetaInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutMetaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutMetaInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutMetaInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutMetaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutMetaInput>;
export const ProductCreateNestedOneWithoutMetaInputObjectZodSchema = makeSchema();
