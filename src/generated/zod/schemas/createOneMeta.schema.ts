import { z } from 'zod';
import { MetaSelectObjectSchema } from './objects/MetaSelect.schema';
import { MetaIncludeObjectSchema } from './objects/MetaInclude.schema';
import { MetaCreateInputObjectSchema } from './objects/MetaCreateInput.schema';
import { MetaUncheckedCreateInputObjectSchema } from './objects/MetaUncheckedCreateInput.schema';

export const MetaCreateOneSchema = z.object({ select: MetaSelectObjectSchema.optional(), include: MetaIncludeObjectSchema.optional(), data: z.union([MetaCreateInputObjectSchema, MetaUncheckedCreateInputObjectSchema])  })