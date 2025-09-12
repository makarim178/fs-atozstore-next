import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();
export const CartItemCreateManyCartsInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyCartsInput>;
export const CartItemCreateManyCartsInputObjectZodSchema = makeSchema();
