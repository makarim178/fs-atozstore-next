import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { MetaOrderByWithRelationInputObjectSchema } from './objects/MetaOrderByWithRelationInput.schema';
import { MetaWhereInputObjectSchema } from './objects/MetaWhereInput.schema';
import { MetaWhereUniqueInputObjectSchema } from './objects/MetaWhereUniqueInput.schema';
import { MetaCountAggregateInputObjectSchema } from './objects/MetaCountAggregateInput.schema';

export const MetaCountSchema: z.ZodType<Prisma.MetaCountArgs> = z.object({ orderBy: z.union([MetaOrderByWithRelationInputObjectSchema, MetaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetaWhereInputObjectSchema.optional(), cursor: MetaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MetaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MetaCountArgs>;

export const MetaCountZodSchema = z.object({ orderBy: z.union([MetaOrderByWithRelationInputObjectSchema, MetaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetaWhereInputObjectSchema.optional(), cursor: MetaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MetaCountAggregateInputObjectSchema ]).optional() }).strict();