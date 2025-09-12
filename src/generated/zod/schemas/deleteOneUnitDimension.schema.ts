import { z } from 'zod';
import { UnitDimensionSelectObjectSchema } from './objects/UnitDimensionSelect.schema';
import { UnitDimensionIncludeObjectSchema } from './objects/UnitDimensionInclude.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './objects/UnitDimensionWhereUniqueInput.schema';

export const UnitDimensionDeleteOneSchema = z.object({ select: UnitDimensionSelectObjectSchema.optional(), include: UnitDimensionIncludeObjectSchema.optional(), where: UnitDimensionWhereUniqueInputObjectSchema  })