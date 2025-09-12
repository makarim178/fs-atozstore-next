import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewCreateManyInputObjectSchema } from './objects/ReviewCreateManyInput.schema';

export const ReviewCreateManyAndReturnSchema = z.object({ select: ReviewSelectObjectSchema.optional(), data: z.union([ ReviewCreateManyInputObjectSchema, z.array(ReviewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()