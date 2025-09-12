import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema'

const cartwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CartWhereInputObjectSchema), z.lazy(() => CartWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartWhereInputObjectSchema), z.lazy(() => CartWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  session_id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  is_ordered: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  cart_items: z.lazy(() => CartItemListRelationFilterObjectSchema).optional()
}).strict();
export const CartWhereInputObjectSchema: z.ZodType<Prisma.CartWhereInput> = cartwhereinputSchema as unknown as z.ZodType<Prisma.CartWhereInput>;
export const CartWhereInputObjectZodSchema = cartwhereinputSchema;
