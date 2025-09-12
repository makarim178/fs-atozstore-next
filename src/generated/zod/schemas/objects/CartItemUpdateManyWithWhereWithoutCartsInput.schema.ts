import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';
import { CartItemUpdateManyMutationInputObjectSchema } from './CartItemUpdateManyMutationInput.schema';
import { CartItemUncheckedUpdateManyWithoutCartsInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutCartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateManyMutationInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateManyWithoutCartsInputObjectSchema)])
}).strict();
export const CartItemUpdateManyWithWhereWithoutCartsInputObjectSchema: z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutCartsInput>;
export const CartItemUpdateManyWithWhereWithoutCartsInputObjectZodSchema = makeSchema();
