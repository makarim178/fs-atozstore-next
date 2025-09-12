import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
import { OrderOrderByWithAggregationInputObjectSchema } from './objects/OrderOrderByWithAggregationInput.schema';
import { OrderScalarWhereWithAggregatesInputObjectSchema } from './objects/OrderScalarWhereWithAggregatesInput.schema';
import { OrderScalarFieldEnumSchema } from './enums/OrderScalarFieldEnum.schema';
import { OrderCountAggregateInputObjectSchema } from './objects/OrderCountAggregateInput.schema';
import { OrderMinAggregateInputObjectSchema } from './objects/OrderMinAggregateInput.schema';
import { OrderMaxAggregateInputObjectSchema } from './objects/OrderMaxAggregateInput.schema';
import { OrderAvgAggregateInputObjectSchema } from './objects/OrderAvgAggregateInput.schema';
import { OrderSumAggregateInputObjectSchema } from './objects/OrderSumAggregateInput.schema';

export const OrderGroupBySchema: z.ZodType<Prisma.OrderGroupByArgs> = z.object({ where: OrderWhereInputObjectSchema.optional(), orderBy: z.union([OrderOrderByWithAggregationInputObjectSchema, OrderOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OrderScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OrderScalarFieldEnumSchema), _count: z.union([ z.literal(true), OrderCountAggregateInputObjectSchema ]).optional(), _min: OrderMinAggregateInputObjectSchema.optional(), _max: OrderMaxAggregateInputObjectSchema.optional(), _avg: OrderAvgAggregateInputObjectSchema.optional(), _sum: OrderSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrderGroupByArgs>;

export const OrderGroupByZodSchema = z.object({ where: OrderWhereInputObjectSchema.optional(), orderBy: z.union([OrderOrderByWithAggregationInputObjectSchema, OrderOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OrderScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OrderScalarFieldEnumSchema), _count: z.union([ z.literal(true), OrderCountAggregateInputObjectSchema ]).optional(), _min: OrderMinAggregateInputObjectSchema.optional(), _max: OrderMaxAggregateInputObjectSchema.optional(), _avg: OrderAvgAggregateInputObjectSchema.optional(), _sum: OrderSumAggregateInputObjectSchema.optional() }).strict();