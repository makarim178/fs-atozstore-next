import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemCreateWithoutProductsInputObjectSchema } from './CartItemCreateWithoutProductsInput.schema';
import { CartItemUncheckedCreateWithoutProductsInputObjectSchema } from './CartItemUncheckedCreateWithoutProductsInput.schema';
import { CartItemCreateOrConnectWithoutProductsInputObjectSchema } from './CartItemCreateOrConnectWithoutProductsInput.schema';
import { CartItemCreateManyProductsInputEnvelopeObjectSchema } from './CartItemCreateManyProductsInputEnvelope.schema';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartItemCreateWithoutProductsInputObjectSchema), z.lazy(() => CartItemCreateWithoutProductsInputObjectSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutProductsInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartItemCreateOrConnectWithoutProductsInputObjectSchema), z.lazy(() => CartItemCreateOrConnectWithoutProductsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartItemCreateManyProductsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CartItemCreateNestedManyWithoutProductsInputObjectSchema: z.ZodType<Prisma.CartItemCreateNestedManyWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateNestedManyWithoutProductsInput>;
export const CartItemCreateNestedManyWithoutProductsInputObjectZodSchema = makeSchema();
