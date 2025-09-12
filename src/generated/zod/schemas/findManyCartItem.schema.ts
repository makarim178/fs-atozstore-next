import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { CartItemIncludeObjectSchema } from './objects/CartItemInclude.schema';
import { CartItemOrderByWithRelationInputObjectSchema } from './objects/CartItemOrderByWithRelationInput.schema';
import { CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';
import { CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';
import { CartItemScalarFieldEnumSchema } from './enums/CartItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CartItemFindManySelectSchema: z.ZodType<Prisma.CartItemSelect> = z.object({
    id: z.boolean().optional(),
    cart_id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    quantity: z.boolean().optional(),
    carts: z.boolean().optional(),
    products: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CartItemSelect>;

export const CartItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    cart_id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    quantity: z.boolean().optional(),
    carts: z.boolean().optional(),
    products: z.boolean().optional()
  }).strict();

export const CartItemFindManySchema: z.ZodType<Prisma.CartItemFindManyArgs> = z.object({ select: CartItemFindManySelectSchema.optional(), include: z.lazy(() => CartItemIncludeObjectSchema.optional()), orderBy: z.union([CartItemOrderByWithRelationInputObjectSchema, CartItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartItemWhereInputObjectSchema.optional(), cursor: CartItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CartItemFindManyArgs>;

export const CartItemFindManyZodSchema = z.object({ select: CartItemFindManySelectSchema.optional(), include: z.lazy(() => CartItemIncludeObjectSchema.optional()), orderBy: z.union([CartItemOrderByWithRelationInputObjectSchema, CartItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartItemWhereInputObjectSchema.optional(), cursor: CartItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array()]).optional() }).strict();