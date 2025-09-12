import { z } from 'zod';
import { MetaSelectObjectSchema } from './objects/MetaSelect.schema';
import { MetaUpdateManyMutationInputObjectSchema } from './objects/MetaUpdateManyMutationInput.schema';
import { MetaWhereInputObjectSchema } from './objects/MetaWhereInput.schema';

export const MetaUpdateManyAndReturnSchema = z.object({ select: MetaSelectObjectSchema.optional(), data: MetaUpdateManyMutationInputObjectSchema, where: MetaWhereInputObjectSchema.optional()  }).strict()