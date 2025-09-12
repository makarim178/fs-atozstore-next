import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { CartUpdateWithoutCart_itemsInputObjectSchema } from './CartUpdateWithoutCart_itemsInput.schema';
import { CartUncheckedUpdateWithoutCart_itemsInputObjectSchema } from './CartUncheckedUpdateWithoutCart_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CartUpdateWithoutCart_itemsInputObjectSchema), z.lazy(() => CartUncheckedUpdateWithoutCart_itemsInputObjectSchema)])
}).strict();
export const CartUpdateToOneWithWhereWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.CartUpdateToOneWithWhereWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUpdateToOneWithWhereWithoutCart_itemsInput>;
export const CartUpdateToOneWithWhereWithoutCart_itemsInputObjectZodSchema = makeSchema();
