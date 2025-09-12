import { z } from 'zod';
import { MetaSelectObjectSchema } from './objects/MetaSelect.schema';
import { MetaIncludeObjectSchema } from './objects/MetaInclude.schema';
import { MetaWhereUniqueInputObjectSchema } from './objects/MetaWhereUniqueInput.schema';
import { MetaCreateInputObjectSchema } from './objects/MetaCreateInput.schema';
import { MetaUncheckedCreateInputObjectSchema } from './objects/MetaUncheckedCreateInput.schema';
import { MetaUpdateInputObjectSchema } from './objects/MetaUpdateInput.schema';
import { MetaUncheckedUpdateInputObjectSchema } from './objects/MetaUncheckedUpdateInput.schema';

export const MetaUpsertSchema = z.object({ select: MetaSelectObjectSchema.optional(), include: MetaIncludeObjectSchema.optional(), where: MetaWhereUniqueInputObjectSchema, create: z.union([ MetaCreateInputObjectSchema, MetaUncheckedCreateInputObjectSchema ]), update: z.union([ MetaUpdateInputObjectSchema, MetaUncheckedUpdateInputObjectSchema ])  })