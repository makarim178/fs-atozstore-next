import { z } from 'zod';
import { UnitDimensionSelectObjectSchema } from './objects/UnitDimensionSelect.schema';
import { UnitDimensionCreateManyInputObjectSchema } from './objects/UnitDimensionCreateManyInput.schema';

export const UnitDimensionCreateManyAndReturnSchema = z.object({ select: UnitDimensionSelectObjectSchema.optional(), data: z.union([ UnitDimensionCreateManyInputObjectSchema, z.array(UnitDimensionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()