import { z } from 'zod';
import { MetaSelectObjectSchema } from './objects/MetaSelect.schema';
import { MetaIncludeObjectSchema } from './objects/MetaInclude.schema';
import { MetaUpdateInputObjectSchema } from './objects/MetaUpdateInput.schema';
import { MetaUncheckedUpdateInputObjectSchema } from './objects/MetaUncheckedUpdateInput.schema';
import { MetaWhereUniqueInputObjectSchema } from './objects/MetaWhereUniqueInput.schema';

export const MetaUpdateOneSchema = z.object({ select: MetaSelectObjectSchema.optional(), include: MetaIncludeObjectSchema.optional(), data: z.union([MetaUpdateInputObjectSchema, MetaUncheckedUpdateInputObjectSchema]), where: MetaWhereUniqueInputObjectSchema  })