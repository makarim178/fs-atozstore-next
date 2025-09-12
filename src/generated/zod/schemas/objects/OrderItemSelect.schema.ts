import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderArgsObjectSchema } from './OrderArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  price: z.boolean().optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
  products: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const OrderItemSelectObjectSchema: z.ZodType<Prisma.OrderItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemSelect>;
export const OrderItemSelectObjectZodSchema = makeSchema();
