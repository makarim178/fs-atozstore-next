import { z } from 'zod';
import { UnitDimensionSelectObjectSchema } from './objects/UnitDimensionSelect.schema';
import { UnitDimensionIncludeObjectSchema } from './objects/UnitDimensionInclude.schema';
import { UnitDimensionUpdateInputObjectSchema } from './objects/UnitDimensionUpdateInput.schema';
import { UnitDimensionUncheckedUpdateInputObjectSchema } from './objects/UnitDimensionUncheckedUpdateInput.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './objects/UnitDimensionWhereUniqueInput.schema';

export const UnitDimensionUpdateOneSchema = z.object({ select: UnitDimensionSelectObjectSchema.optional(), include: UnitDimensionIncludeObjectSchema.optional(), data: z.union([UnitDimensionUpdateInputObjectSchema, UnitDimensionUncheckedUpdateInputObjectSchema]), where: UnitDimensionWhereUniqueInputObjectSchema  })