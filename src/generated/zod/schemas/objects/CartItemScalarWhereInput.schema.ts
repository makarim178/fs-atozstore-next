import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema'

const cartitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  cart_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const CartItemScalarWhereInputObjectSchema: z.ZodType<Prisma.CartItemScalarWhereInput> = cartitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.CartItemScalarWhereInput>;
export const CartItemScalarWhereInputObjectZodSchema = cartitemscalarwhereinputSchema;
