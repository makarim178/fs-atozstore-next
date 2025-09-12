import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { CartScalarRelationFilterObjectSchema } from './CartScalarRelationFilter.schema';
import { CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const cartitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CartItemWhereInputObjectSchema), z.lazy(() => CartItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartItemWhereInputObjectSchema), z.lazy(() => CartItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  cart_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  carts: z.union([z.lazy(() => CartScalarRelationFilterObjectSchema), z.lazy(() => CartWhereInputObjectSchema)]).optional(),
  products: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const CartItemWhereInputObjectSchema: z.ZodType<Prisma.CartItemWhereInput> = cartitemwhereinputSchema as unknown as z.ZodType<Prisma.CartItemWhereInput>;
export const CartItemWhereInputObjectZodSchema = cartitemwhereinputSchema;
