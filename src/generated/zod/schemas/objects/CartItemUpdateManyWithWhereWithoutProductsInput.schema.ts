import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';
import { CartItemUpdateManyMutationInputObjectSchema } from './CartItemUpdateManyMutationInput.schema';
import { CartItemUncheckedUpdateManyWithoutProductsInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateManyMutationInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateManyWithoutProductsInputObjectSchema)])
}).strict();
export const CartItemUpdateManyWithWhereWithoutProductsInputObjectSchema: z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutProductsInput>;
export const CartItemUpdateManyWithWhereWithoutProductsInputObjectZodSchema = makeSchema();
