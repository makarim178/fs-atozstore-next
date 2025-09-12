import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemCreateNestedManyWithoutOrdersInputObjectSchema } from './OrderItemCreateNestedManyWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  session_id: z.string(),
  total: z.number(),
  created_at: z.coerce.date().optional().nullable(),
  order_items: z.lazy(() => OrderItemCreateNestedManyWithoutOrdersInputObjectSchema)
}).strict();
export const OrderCreateInputObjectSchema: z.ZodType<Prisma.OrderCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateInput>;
export const OrderCreateInputObjectZodSchema = makeSchema();
