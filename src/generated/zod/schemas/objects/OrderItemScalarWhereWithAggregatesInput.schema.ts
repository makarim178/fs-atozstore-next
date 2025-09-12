import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

const orderitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
export const OrderItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput> = orderitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput>;
export const OrderItemScalarWhereWithAggregatesInputObjectZodSchema = orderitemscalarwherewithaggregatesinputSchema;
