import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
import { OrderItemOrderByWithAggregationInputObjectSchema } from './objects/OrderItemOrderByWithAggregationInput.schema';
import { OrderItemScalarWhereWithAggregatesInputObjectSchema } from './objects/OrderItemScalarWhereWithAggregatesInput.schema';
import { OrderItemScalarFieldEnumSchema } from './enums/OrderItemScalarFieldEnum.schema';
import { OrderItemCountAggregateInputObjectSchema } from './objects/OrderItemCountAggregateInput.schema';
import { OrderItemMinAggregateInputObjectSchema } from './objects/OrderItemMinAggregateInput.schema';
import { OrderItemMaxAggregateInputObjectSchema } from './objects/OrderItemMaxAggregateInput.schema';
import { OrderItemAvgAggregateInputObjectSchema } from './objects/OrderItemAvgAggregateInput.schema';
import { OrderItemSumAggregateInputObjectSchema } from './objects/OrderItemSumAggregateInput.schema';

export const OrderItemGroupBySchema: z.ZodType<Prisma.OrderItemGroupByArgs> = z.object({ where: OrderItemWhereInputObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithAggregationInputObjectSchema, OrderItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OrderItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OrderItemScalarFieldEnumSchema), _count: z.union([ z.literal(true), OrderItemCountAggregateInputObjectSchema ]).optional(), _min: OrderItemMinAggregateInputObjectSchema.optional(), _max: OrderItemMaxAggregateInputObjectSchema.optional(), _avg: OrderItemAvgAggregateInputObjectSchema.optional(), _sum: OrderItemSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrderItemGroupByArgs>;

export const OrderItemGroupByZodSchema = z.object({ where: OrderItemWhereInputObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithAggregationInputObjectSchema, OrderItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OrderItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OrderItemScalarFieldEnumSchema), _count: z.union([ z.literal(true), OrderItemCountAggregateInputObjectSchema ]).optional(), _min: OrderItemMinAggregateInputObjectSchema.optional(), _max: OrderItemMaxAggregateInputObjectSchema.optional(), _avg: OrderItemAvgAggregateInputObjectSchema.optional(), _sum: OrderItemSumAggregateInputObjectSchema.optional() }).strict();