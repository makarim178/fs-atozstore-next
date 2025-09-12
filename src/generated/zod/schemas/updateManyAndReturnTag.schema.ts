import { z } from 'zod';
import { TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagUpdateManyMutationInputObjectSchema } from './objects/TagUpdateManyMutationInput.schema';
import { TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';

export const TagUpdateManyAndReturnSchema = z.object({ select: TagSelectObjectSchema.optional(), data: TagUpdateManyMutationInputObjectSchema, where: TagWhereInputObjectSchema.optional()  }).strict()