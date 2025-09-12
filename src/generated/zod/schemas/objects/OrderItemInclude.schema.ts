import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderArgsObjectSchema } from './OrderArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  orders: z.union([z.boolean(), z.lazy(() => OrderArgsObjectSchema)]).optional(),
  products: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const OrderItemIncludeObjectSchema: z.ZodType<Prisma.OrderItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemInclude>;
export const OrderItemIncludeObjectZodSchema = makeSchema();
