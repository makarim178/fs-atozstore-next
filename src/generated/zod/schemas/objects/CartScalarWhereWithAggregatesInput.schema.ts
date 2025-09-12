import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'

const cartscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CartScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  session_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  is_ordered: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const CartScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CartScalarWhereWithAggregatesInput> = cartscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CartScalarWhereWithAggregatesInput>;
export const CartScalarWhereWithAggregatesInputObjectZodSchema = cartscalarwherewithaggregatesinputSchema;
