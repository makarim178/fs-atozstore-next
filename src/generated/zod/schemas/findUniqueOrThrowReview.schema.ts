import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewFindUniqueOrThrowSchema: z.ZodType<Prisma.ReviewFindUniqueOrThrowArgs> = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), where: ReviewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewFindUniqueOrThrowArgs>;

export const ReviewFindUniqueOrThrowZodSchema = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), where: ReviewWhereUniqueInputObjectSchema }).strict();