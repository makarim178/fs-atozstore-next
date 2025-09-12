import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewScalarFieldEnumSchema } from './enums/ReviewScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewFindFirstSelectSchema: z.ZodType<Prisma.ReviewSelect> = z.object({
    id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    rating: z.boolean().optional(),
    comment: z.boolean().optional(),
    created_at: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReviewSelect>;

export const ReviewFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    rating: z.boolean().optional(),
    comment: z.boolean().optional(),
    created_at: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const ReviewFindFirstSchema: z.ZodType<Prisma.ReviewFindFirstArgs> = z.object({ select: ReviewFindFirstSelectSchema.optional(), include: z.lazy(() => ReviewIncludeObjectSchema.optional()), orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewScalarFieldEnumSchema, ReviewScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewFindFirstArgs>;

export const ReviewFindFirstZodSchema = z.object({ select: ReviewFindFirstSelectSchema.optional(), include: z.lazy(() => ReviewIncludeObjectSchema.optional()), orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewScalarFieldEnumSchema, ReviewScalarFieldEnumSchema.array()]).optional() }).strict();