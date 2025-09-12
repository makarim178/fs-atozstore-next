import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cart_id: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CartItemCountAggregateInputObjectSchema: z.ZodType<Prisma.CartItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCountAggregateInputType>;
export const CartItemCountAggregateInputObjectZodSchema = makeSchema();
