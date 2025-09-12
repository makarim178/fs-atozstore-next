import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { MetaWhereInputObjectSchema } from './objects/MetaWhereInput.schema';
import { MetaOrderByWithAggregationInputObjectSchema } from './objects/MetaOrderByWithAggregationInput.schema';
import { MetaScalarWhereWithAggregatesInputObjectSchema } from './objects/MetaScalarWhereWithAggregatesInput.schema';
import { MetaScalarFieldEnumSchema } from './enums/MetaScalarFieldEnum.schema';
import { MetaCountAggregateInputObjectSchema } from './objects/MetaCountAggregateInput.schema';
import { MetaMinAggregateInputObjectSchema } from './objects/MetaMinAggregateInput.schema';
import { MetaMaxAggregateInputObjectSchema } from './objects/MetaMaxAggregateInput.schema';

export const MetaGroupBySchema: z.ZodType<Prisma.MetaGroupByArgs> = z.object({ where: MetaWhereInputObjectSchema.optional(), orderBy: z.union([MetaOrderByWithAggregationInputObjectSchema, MetaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MetaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MetaScalarFieldEnumSchema), _count: z.union([ z.literal(true), MetaCountAggregateInputObjectSchema ]).optional(), _min: MetaMinAggregateInputObjectSchema.optional(), _max: MetaMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MetaGroupByArgs>;

export const MetaGroupByZodSchema = z.object({ where: MetaWhereInputObjectSchema.optional(), orderBy: z.union([MetaOrderByWithAggregationInputObjectSchema, MetaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MetaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MetaScalarFieldEnumSchema), _count: z.union([ z.literal(true), MetaCountAggregateInputObjectSchema ]).optional(), _min: MetaMinAggregateInputObjectSchema.optional(), _max: MetaMaxAggregateInputObjectSchema.optional() }).strict();