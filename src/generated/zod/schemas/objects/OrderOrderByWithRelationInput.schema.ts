import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  order_items: z.lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OrderOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderOrderByWithRelationInput>;
export const OrderOrderByWithRelationInputObjectZodSchema = makeSchema();
