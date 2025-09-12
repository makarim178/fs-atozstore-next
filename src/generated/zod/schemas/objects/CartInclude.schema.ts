import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemFindManySchema } from '../findManyCartItem.schema';
import { CartCountOutputTypeArgsObjectSchema } from './CartCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  cart_items: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CartCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CartIncludeObjectSchema: z.ZodType<Prisma.CartInclude> = makeSchema() as unknown as z.ZodType<Prisma.CartInclude>;
export const CartIncludeObjectZodSchema = makeSchema();
