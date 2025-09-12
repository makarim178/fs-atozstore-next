import { z } from 'zod';
import { UnitDimensionSelectObjectSchema } from './objects/UnitDimensionSelect.schema';
import { UnitDimensionIncludeObjectSchema } from './objects/UnitDimensionInclude.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './objects/UnitDimensionWhereUniqueInput.schema';
import { UnitDimensionCreateInputObjectSchema } from './objects/UnitDimensionCreateInput.schema';
import { UnitDimensionUncheckedCreateInputObjectSchema } from './objects/UnitDimensionUncheckedCreateInput.schema';
import { UnitDimensionUpdateInputObjectSchema } from './objects/UnitDimensionUpdateInput.schema';
import { UnitDimensionUncheckedUpdateInputObjectSchema } from './objects/UnitDimensionUncheckedUpdateInput.schema';

export const UnitDimensionUpsertSchema = z.object({ select: UnitDimensionSelectObjectSchema.optional(), include: UnitDimensionIncludeObjectSchema.optional(), where: UnitDimensionWhereUniqueInputObjectSchema, create: z.union([ UnitDimensionCreateInputObjectSchema, UnitDimensionUncheckedCreateInputObjectSchema ]), update: z.union([ UnitDimensionUpdateInputObjectSchema, UnitDimensionUncheckedUpdateInputObjectSchema ])  })