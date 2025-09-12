import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';
import { CartItemOrderByWithAggregationInputObjectSchema } from './objects/CartItemOrderByWithAggregationInput.schema';
import { CartItemScalarWhereWithAggregatesInputObjectSchema } from './objects/CartItemScalarWhereWithAggregatesInput.schema';
import { CartItemScalarFieldEnumSchema } from './enums/CartItemScalarFieldEnum.schema';
import { CartItemCountAggregateInputObjectSchema } from './objects/CartItemCountAggregateInput.schema';
import { CartItemMinAggregateInputObjectSchema } from './objects/CartItemMinAggregateInput.schema';
import { CartItemMaxAggregateInputObjectSchema } from './objects/CartItemMaxAggregateInput.schema';
import { CartItemAvgAggregateInputObjectSchema } from './objects/CartItemAvgAggregateInput.schema';
import { CartItemSumAggregateInputObjectSchema } from './objects/CartItemSumAggregateInput.schema';

export const CartItemGroupBySchema: z.ZodType<Prisma.CartItemGroupByArgs> = z.object({ where: CartItemWhereInputObjectSchema.optional(), orderBy: z.union([CartItemOrderByWithAggregationInputObjectSchema, CartItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CartItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CartItemScalarFieldEnumSchema), _count: z.union([ z.literal(true), CartItemCountAggregateInputObjectSchema ]).optional(), _min: CartItemMinAggregateInputObjectSchema.optional(), _max: CartItemMaxAggregateInputObjectSchema.optional(), _avg: CartItemAvgAggregateInputObjectSchema.optional(), _sum: CartItemSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CartItemGroupByArgs>;

export const CartItemGroupByZodSchema = z.object({ where: CartItemWhereInputObjectSchema.optional(), orderBy: z.union([CartItemOrderByWithAggregationInputObjectSchema, CartItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CartItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CartItemScalarFieldEnumSchema), _count: z.union([ z.literal(true), CartItemCountAggregateInputObjectSchema ]).optional(), _min: CartItemMinAggregateInputObjectSchema.optional(), _max: CartItemMaxAggregateInputObjectSchema.optional(), _avg: CartItemAvgAggregateInputObjectSchema.optional(), _sum: CartItemSumAggregateInputObjectSchema.optional() }).strict();