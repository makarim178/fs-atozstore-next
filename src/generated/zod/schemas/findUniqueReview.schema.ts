import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewFindUniqueSchema: z.ZodType<Prisma.ReviewFindUniqueArgs> = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), where: ReviewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewFindUniqueArgs>;

export const ReviewFindUniqueZodSchema = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), where: ReviewWhereUniqueInputObjectSchema }).strict();