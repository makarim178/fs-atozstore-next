import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { OrderCountOutputTypeArgsObjectSchema } from './OrderCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  order_items: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrderCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrderIncludeObjectSchema: z.ZodType<Prisma.OrderInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrderInclude>;
export const OrderIncludeObjectZodSchema = makeSchema();
