import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema'

const orderitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema), z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema), z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  order_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional()
}).strict();
export const OrderItemScalarWhereInputObjectSchema: z.ZodType<Prisma.OrderItemScalarWhereInput> = orderitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.OrderItemScalarWhereInput>;
export const OrderItemScalarWhereInputObjectZodSchema = orderitemscalarwhereinputSchema;
