import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartArgsObjectSchema } from './CartArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  cart_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  carts: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  products: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const CartItemSelectObjectSchema: z.ZodType<Prisma.CartItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.CartItemSelect>;
export const CartItemSelectObjectZodSchema = makeSchema();
