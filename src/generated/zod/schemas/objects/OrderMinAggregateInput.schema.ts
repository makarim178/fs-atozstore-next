import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  session_id: z.literal(true).optional(),
  total: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const OrderMinAggregateInputObjectSchema: z.ZodType<Prisma.OrderMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderMinAggregateInputType>;
export const OrderMinAggregateInputObjectZodSchema = makeSchema();
