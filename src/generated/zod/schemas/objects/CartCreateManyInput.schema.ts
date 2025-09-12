import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  is_ordered: z.boolean().optional().nullable()
}).strict();
export const CartCreateManyInputObjectSchema: z.ZodType<Prisma.CartCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateManyInput>;
export const CartCreateManyInputObjectZodSchema = makeSchema();
