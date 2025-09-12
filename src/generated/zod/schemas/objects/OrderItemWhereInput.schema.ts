import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { OrderScalarRelationFilterObjectSchema } from './OrderScalarRelationFilter.schema';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const orderitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderItemWhereInputObjectSchema), z.lazy(() => OrderItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderItemWhereInputObjectSchema), z.lazy(() => OrderItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  order_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  orders: z.union([z.lazy(() => OrderScalarRelationFilterObjectSchema), z.lazy(() => OrderWhereInputObjectSchema)]).optional(),
  products: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const OrderItemWhereInputObjectSchema: z.ZodType<Prisma.OrderItemWhereInput> = orderitemwhereinputSchema as unknown as z.ZodType<Prisma.OrderItemWhereInput>;
export const OrderItemWhereInputObjectZodSchema = orderitemwhereinputSchema;
