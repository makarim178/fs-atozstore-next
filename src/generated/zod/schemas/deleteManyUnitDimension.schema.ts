import { z } from 'zod';
import { UnitDimensionWhereInputObjectSchema } from './objects/UnitDimensionWhereInput.schema';

export const UnitDimensionDeleteManySchema = z.object({ where: UnitDimensionWhereInputObjectSchema.optional()  })