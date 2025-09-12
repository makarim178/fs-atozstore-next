import { z } from 'zod';
import { MetaUpdateManyMutationInputObjectSchema } from './objects/MetaUpdateManyMutationInput.schema';
import { MetaWhereInputObjectSchema } from './objects/MetaWhereInput.schema';

export const MetaUpdateManySchema = z.object({ data: MetaUpdateManyMutationInputObjectSchema, where: MetaWhereInputObjectSchema.optional()  })