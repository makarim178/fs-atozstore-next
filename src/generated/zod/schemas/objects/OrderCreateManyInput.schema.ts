import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  total: z.number(),
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const OrderCreateManyInputObjectSchema: z.ZodType<Prisma.OrderCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateManyInput>;
export const OrderCreateManyInputObjectZodSchema = makeSchema();
