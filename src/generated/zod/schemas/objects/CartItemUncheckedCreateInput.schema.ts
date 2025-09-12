import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cart_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();
export const CartItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedCreateInput>;
export const CartItemUncheckedCreateInputObjectZodSchema = makeSchema();
