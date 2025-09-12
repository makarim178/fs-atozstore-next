import { z } from 'zod';
import { MetaSelectObjectSchema } from './objects/MetaSelect.schema';
import { MetaCreateManyInputObjectSchema } from './objects/MetaCreateManyInput.schema';

export const MetaCreateManyAndReturnSchema = z.object({ select: MetaSelectObjectSchema.optional(), data: z.union([ MetaCreateManyInputObjectSchema, z.array(MetaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()