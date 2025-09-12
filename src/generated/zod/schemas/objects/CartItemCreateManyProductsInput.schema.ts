import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cart_id: z.string(),
  quantity: z.number().int()
}).strict();
export const CartItemCreateManyProductsInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyProductsInput>;
export const CartItemCreateManyProductsInputObjectZodSchema = makeSchema();
