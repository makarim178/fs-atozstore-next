import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemCreateWithoutCartsInputObjectSchema } from './CartItemCreateWithoutCartsInput.schema';
import { CartItemUncheckedCreateWithoutCartsInputObjectSchema } from './CartItemUncheckedCreateWithoutCartsInput.schema';
import { CartItemCreateOrConnectWithoutCartsInputObjectSchema } from './CartItemCreateOrConnectWithoutCartsInput.schema';
import { CartItemCreateManyCartsInputEnvelopeObjectSchema } from './CartItemCreateManyCartsInputEnvelope.schema';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartItemCreateWithoutCartsInputObjectSchema), z.lazy(() => CartItemCreateWithoutCartsInputObjectSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutCartsInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartItemCreateOrConnectWithoutCartsInputObjectSchema), z.lazy(() => CartItemCreateOrConnectWithoutCartsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartItemCreateManyCartsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CartItemUncheckedCreateNestedManyWithoutCartsInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutCartsInput>;
export const CartItemUncheckedCreateNestedManyWithoutCartsInputObjectZodSchema = makeSchema();
