import { z } from 'zod';
import { MetaCreateManyInputObjectSchema } from './objects/MetaCreateManyInput.schema';

export const MetaCreateManySchema = z.object({ data: z.union([ MetaCreateManyInputObjectSchema, z.array(MetaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })