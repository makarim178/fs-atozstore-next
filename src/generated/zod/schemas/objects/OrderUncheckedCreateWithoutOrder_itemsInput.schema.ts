import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  total: z.number(),
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const OrderUncheckedCreateWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
export const OrderUncheckedCreateWithoutOrder_itemsInputObjectZodSchema = makeSchema();
