import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { CartIncludeObjectSchema } from './objects/CartInclude.schema';
import { CartOrderByWithRelationInputObjectSchema } from './objects/CartOrderByWithRelationInput.schema';
import { CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';
import { CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';
import { CartScalarFieldEnumSchema } from './enums/CartScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CartFindFirstSelectSchema: z.ZodType<Prisma.CartSelect> = z.object({
    id: z.boolean().optional(),
    session_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    is_ordered: z.boolean().optional(),
    cart_items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CartSelect>;

export const CartFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    session_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    is_ordered: z.boolean().optional(),
    cart_items: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CartFindFirstSchema: z.ZodType<Prisma.CartFindFirstArgs> = z.object({ select: CartFindFirstSelectSchema.optional(), include: z.lazy(() => CartIncludeObjectSchema.optional()), orderBy: z.union([CartOrderByWithRelationInputObjectSchema, CartOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartWhereInputObjectSchema.optional(), cursor: CartWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartScalarFieldEnumSchema, CartScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CartFindFirstArgs>;

export const CartFindFirstZodSchema = z.object({ select: CartFindFirstSelectSchema.optional(), include: z.lazy(() => CartIncludeObjectSchema.optional()), orderBy: z.union([CartOrderByWithRelationInputObjectSchema, CartOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartWhereInputObjectSchema.optional(), cursor: CartWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartScalarFieldEnumSchema, CartScalarFieldEnumSchema.array()]).optional() }).strict();