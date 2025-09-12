import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartArgsObjectSchema } from './CartArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  carts: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  products: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const CartItemIncludeObjectSchema: z.ZodType<Prisma.CartItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.CartItemInclude>;
export const CartItemIncludeObjectZodSchema = makeSchema();
