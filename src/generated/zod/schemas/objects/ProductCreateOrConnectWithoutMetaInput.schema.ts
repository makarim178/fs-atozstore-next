import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutMetaInputObjectSchema } from './ProductCreateWithoutMetaInput.schema';
import { ProductUncheckedCreateWithoutMetaInputObjectSchema } from './ProductUncheckedCreateWithoutMetaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutMetaInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutMetaInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutMetaInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutMetaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutMetaInput>;
export const ProductCreateOrConnectWithoutMetaInputObjectZodSchema = makeSchema();
