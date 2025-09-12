import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { OrderIncludeObjectSchema } from './objects/OrderInclude.schema';
import { OrderOrderByWithRelationInputObjectSchema } from './objects/OrderOrderByWithRelationInput.schema';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';
import { OrderScalarFieldEnumSchema } from './enums/OrderScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderFindFirstOrThrowSelectSchema: z.ZodType<Prisma.OrderSelect> = z.object({
    id: z.boolean().optional(),
    session_id: z.boolean().optional(),
    total: z.boolean().optional(),
    created_at: z.boolean().optional(),
    order_items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OrderSelect>;

export const OrderFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    session_id: z.boolean().optional(),
    total: z.boolean().optional(),
    created_at: z.boolean().optional(),
    order_items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const OrderFindFirstOrThrowSchema: z.ZodType<Prisma.OrderFindFirstOrThrowArgs> = z.object({ select: OrderFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OrderIncludeObjectSchema.optional()), orderBy: z.union([OrderOrderByWithRelationInputObjectSchema, OrderOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrderWhereInputObjectSchema.optional(), cursor: OrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderScalarFieldEnumSchema, OrderScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrderFindFirstOrThrowArgs>;

export const OrderFindFirstOrThrowZodSchema = z.object({ select: OrderFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OrderIncludeObjectSchema.optional()), orderBy: z.union([OrderOrderByWithRelationInputObjectSchema, OrderOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrderWhereInputObjectSchema.optional(), cursor: OrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderScalarFieldEnumSchema, OrderScalarFieldEnumSchema.array()]).optional() }).strict();