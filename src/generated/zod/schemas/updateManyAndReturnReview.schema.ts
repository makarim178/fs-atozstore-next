import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewUpdateManyMutationInputObjectSchema } from './objects/ReviewUpdateManyMutationInput.schema';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';

export const ReviewUpdateManyAndReturnSchema = z.object({ select: ReviewSelectObjectSchema.optional(), data: ReviewUpdateManyMutationInputObjectSchema, where: ReviewWhereInputObjectSchema.optional()  }).strict()