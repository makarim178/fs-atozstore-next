import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagOrderByWithAggregationInputObjectSchema } from './objects/TagOrderByWithAggregationInput.schema';
import { TagScalarWhereWithAggregatesInputObjectSchema } from './objects/TagScalarWhereWithAggregatesInput.schema';
import { TagScalarFieldEnumSchema } from './enums/TagScalarFieldEnum.schema';
import { TagCountAggregateInputObjectSchema } from './objects/TagCountAggregateInput.schema';
import { TagMinAggregateInputObjectSchema } from './objects/TagMinAggregateInput.schema';
import { TagMaxAggregateInputObjectSchema } from './objects/TagMaxAggregateInput.schema';

export const TagGroupBySchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({ where: TagWhereInputObjectSchema.optional(), orderBy: z.union([TagOrderByWithAggregationInputObjectSchema, TagOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TagScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TagScalarFieldEnumSchema), _count: z.union([ z.literal(true), TagCountAggregateInputObjectSchema ]).optional(), _min: TagMinAggregateInputObjectSchema.optional(), _max: TagMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagGroupByArgs>;

export const TagGroupByZodSchema = z.object({ where: TagWhereInputObjectSchema.optional(), orderBy: z.union([TagOrderByWithAggregationInputObjectSchema, TagOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TagScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TagScalarFieldEnumSchema), _count: z.union([ z.literal(true), TagCountAggregateInputObjectSchema ]).optional(), _min: TagMinAggregateInputObjectSchema.optional(), _max: TagMaxAggregateInputObjectSchema.optional() }).strict();