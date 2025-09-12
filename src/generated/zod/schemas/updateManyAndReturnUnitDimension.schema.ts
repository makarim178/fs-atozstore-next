import { z } from 'zod';
import { UnitDimensionSelectObjectSchema } from './objects/UnitDimensionSelect.schema';
import { UnitDimensionUpdateManyMutationInputObjectSchema } from './objects/UnitDimensionUpdateManyMutationInput.schema';
import { UnitDimensionWhereInputObjectSchema } from './objects/UnitDimensionWhereInput.schema';

export const UnitDimensionUpdateManyAndReturnSchema = z.object({ select: UnitDimensionSelectObjectSchema.optional(), data: UnitDimensionUpdateManyMutationInputObjectSchema, where: UnitDimensionWhereInputObjectSchema.optional()  }).strict()