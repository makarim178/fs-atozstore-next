import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { MetaOrderByWithRelationInputObjectSchema } from './objects/MetaOrderByWithRelationInput.schema';
import { MetaWhereInputObjectSchema } from './objects/MetaWhereInput.schema';
import { MetaWhereUniqueInputObjectSchema } from './objects/MetaWhereUniqueInput.schema';
import { MetaCountAggregateInputObjectSchema } from './objects/MetaCountAggregateInput.schema';
import { MetaMinAggregateInputObjectSchema } from './objects/MetaMinAggregateInput.schema';
import { MetaMaxAggregateInputObjectSchema } from './objects/MetaMaxAggregateInput.schema';

export const MetaAggregateSchema: z.ZodType<Prisma.MetaAggregateArgs> = z.object({ orderBy: z.union([MetaOrderByWithRelationInputObjectSchema, MetaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetaWhereInputObjectSchema.optional(), cursor: MetaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MetaCountAggregateInputObjectSchema ]).optional(), _min: MetaMinAggregateInputObjectSchema.optional(), _max: MetaMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MetaAggregateArgs>;

export const MetaAggregateZodSchema = z.object({ orderBy: z.union([MetaOrderByWithRelationInputObjectSchema, MetaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetaWhereInputObjectSchema.optional(), cursor: MetaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MetaCountAggregateInputObjectSchema ]).optional(), _min: MetaMinAggregateInputObjectSchema.optional(), _max: MetaMaxAggregateInputObjectSchema.optional() }).strict();