import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  is_ordered: z.boolean().optional().nullable()
}).strict();
export const CartUncheckedCreateWithoutCart_itemsInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateWithoutCart_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUncheckedCreateWithoutCart_itemsInput>;
export const CartUncheckedCreateWithoutCart_itemsInputObjectZodSchema = makeSchema();
