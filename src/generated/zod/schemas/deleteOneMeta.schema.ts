import { z } from 'zod';
import { MetaSelectObjectSchema } from './objects/MetaSelect.schema';
import { MetaIncludeObjectSchema } from './objects/MetaInclude.schema';
import { MetaWhereUniqueInputObjectSchema } from './objects/MetaWhereUniqueInput.schema';

export const MetaDeleteOneSchema = z.object({ select: MetaSelectObjectSchema.optional(), include: MetaIncludeObjectSchema.optional(), where: MetaWhereUniqueInputObjectSchema  })