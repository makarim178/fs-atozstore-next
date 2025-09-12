import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  session_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  is_ordered: z.literal(true).optional()
}).strict();
export const CartMaxAggregateInputObjectSchema: z.ZodType<Prisma.CartMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CartMaxAggregateInputType>;
export const CartMaxAggregateInputObjectZodSchema = makeSchema();
