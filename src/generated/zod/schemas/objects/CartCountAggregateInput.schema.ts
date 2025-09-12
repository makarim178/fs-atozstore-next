import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  session_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  is_ordered: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CartCountAggregateInputObjectSchema: z.ZodType<Prisma.CartCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CartCountAggregateInputType>;
export const CartCountAggregateInputObjectZodSchema = makeSchema();
