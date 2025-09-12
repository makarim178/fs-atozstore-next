import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { OrderCountOutputTypeArgsObjectSchema } from './OrderCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  session_id: z.boolean().optional(),
  total: z.boolean().optional(),
  created_at: z.boolean().optional(),
  order_items: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrderCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrderSelectObjectSchema: z.ZodType<Prisma.OrderSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrderSelect>;
export const OrderSelectObjectZodSchema = makeSchema();
