import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewCountAggregateInputObjectSchema } from './objects/ReviewCountAggregateInput.schema';

export const ReviewCountSchema: z.ZodType<Prisma.ReviewCountArgs> = z.object({ orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewCountArgs>;

export const ReviewCountZodSchema = z.object({ orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional() }).strict();