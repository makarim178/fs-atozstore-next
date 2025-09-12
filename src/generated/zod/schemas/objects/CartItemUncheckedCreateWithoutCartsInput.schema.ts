import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();
export const CartItemUncheckedCreateWithoutCartsInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedCreateWithoutCartsInput>;
export const CartItemUncheckedCreateWithoutCartsInputObjectZodSchema = makeSchema();
