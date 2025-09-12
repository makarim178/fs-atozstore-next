import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemUncheckedCreateNestedManyWithoutOrdersInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  total: z.number(),
  created_at: z.coerce.date().optional().nullable(),
  order_items: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrdersInputObjectSchema)
}).strict();
export const OrderUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrderUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedCreateInput>;
export const OrderUncheckedCreateInputObjectZodSchema = makeSchema();
