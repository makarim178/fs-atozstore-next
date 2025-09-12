import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cart_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();
export const CartItemCreateManyInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyInput>;
export const CartItemCreateManyInputObjectZodSchema = makeSchema();
