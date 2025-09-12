import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cart_id: z.string(),
  quantity: z.number().int()
}).strict();
export const CartItemUncheckedCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductsInput>;
export const CartItemUncheckedCreateWithoutProductsInputObjectZodSchema = makeSchema();
