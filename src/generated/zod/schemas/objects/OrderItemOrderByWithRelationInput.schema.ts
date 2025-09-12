import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderOrderByWithRelationInputObjectSchema } from './OrderOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  orders: z.lazy(() => OrderOrderByWithRelationInputObjectSchema).optional(),
  products: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const OrderItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrderItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemOrderByWithRelationInput>;
export const OrderItemOrderByWithRelationInputObjectZodSchema = makeSchema();
