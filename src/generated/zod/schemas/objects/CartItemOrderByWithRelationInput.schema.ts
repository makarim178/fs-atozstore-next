import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cart_id: SortOrderSchema.optional(),
  product_id: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  carts: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional(),
  products: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CartItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CartItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemOrderByWithRelationInput>;
export const CartItemOrderByWithRelationInputObjectZodSchema = makeSchema();
