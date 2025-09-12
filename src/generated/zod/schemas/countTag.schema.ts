import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { TagOrderByWithRelationInputObjectSchema } from './objects/TagOrderByWithRelationInput.schema';
import { TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagCountAggregateInputObjectSchema } from './objects/TagCountAggregateInput.schema';

export const TagCountSchema: z.ZodType<Prisma.TagCountArgs> = z.object({ orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TagCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TagCountArgs>;

export const TagCountZodSchema = z.object({ orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TagCountAggregateInputObjectSchema ]).optional() }).strict();