import { z } from 'zod';
import { UnitDimensionSelectObjectSchema } from './objects/UnitDimensionSelect.schema';
import { UnitDimensionIncludeObjectSchema } from './objects/UnitDimensionInclude.schema';
import { UnitDimensionCreateInputObjectSchema } from './objects/UnitDimensionCreateInput.schema';
import { UnitDimensionUncheckedCreateInputObjectSchema } from './objects/UnitDimensionUncheckedCreateInput.schema';

export const UnitDimensionCreateOneSchema = z.object({ select: UnitDimensionSelectObjectSchema.optional(), include: UnitDimensionIncludeObjectSchema.optional(), data: z.union([UnitDimensionCreateInputObjectSchema, UnitDimensionUncheckedCreateInputObjectSchema])  })