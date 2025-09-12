import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cart_id: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  quantity: z.literal(true).optional()
}).strict();
export const CartItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.CartItemMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CartItemMaxAggregateInputType>;
export const CartItemMaxAggregateInputObjectZodSchema = makeSchema();
