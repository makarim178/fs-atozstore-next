import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  is_ordered: z.boolean().optional().nullable()
}).strict();
export const CartCreateWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.CartCreateWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateWithoutCart_itemsInput>;
export const CartCreateWithoutCart_itemsInputObjectZodSchema = makeSchema();
