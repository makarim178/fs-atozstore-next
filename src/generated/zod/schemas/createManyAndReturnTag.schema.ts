import { z } from 'zod';
import { TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagCreateManyInputObjectSchema } from './objects/TagCreateManyInput.schema';

export const TagCreateManyAndReturnSchema = z.object({ select: TagSelectObjectSchema.optional(), data: z.union([ TagCreateManyInputObjectSchema, z.array(TagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()