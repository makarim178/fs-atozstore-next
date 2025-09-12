import { z } from 'zod';
import { MetaWhereInputObjectSchema } from './objects/MetaWhereInput.schema';

export const MetaDeleteManySchema = z.object({ where: MetaWhereInputObjectSchema.optional()  })