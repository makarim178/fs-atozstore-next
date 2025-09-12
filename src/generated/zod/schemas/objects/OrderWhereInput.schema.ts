import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema'

const orderwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderWhereInputObjectSchema), z.lazy(() => OrderWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderWhereInputObjectSchema), z.lazy(() => OrderWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  session_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  total: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  order_items: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional()
}).strict();
export const OrderWhereInputObjectSchema: z.ZodType<Prisma.OrderWhereInput> = orderwhereinputSchema as unknown as z.ZodType<Prisma.OrderWhereInput>;
export const OrderWhereInputObjectZodSchema = orderwhereinputSchema;
