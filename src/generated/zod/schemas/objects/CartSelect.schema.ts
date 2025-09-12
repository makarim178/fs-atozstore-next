import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemFindManySchema } from '../findManyCartItem.schema';
import { CartCountOutputTypeArgsObjectSchema } from './CartCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  session_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  is_ordered: z.boolean().optional(),
  cart_items: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CartCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CartSelectObjectSchema: z.ZodType<Prisma.CartSelect> = makeSchema() as unknown as z.ZodType<Prisma.CartSelect>;
export const CartSelectObjectZodSchema = makeSchema();
