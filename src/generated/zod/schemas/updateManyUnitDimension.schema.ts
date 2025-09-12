import { z } from 'zod';
import { UnitDimensionUpdateManyMutationInputObjectSchema } from './objects/UnitDimensionUpdateManyMutationInput.schema';
import { UnitDimensionWhereInputObjectSchema } from './objects/UnitDimensionWhereInput.schema';

export const UnitDimensionUpdateManySchema = z.object({ data: UnitDimensionUpdateManyMutationInputObjectSchema, where: UnitDimensionWhereInputObjectSchema.optional()  })