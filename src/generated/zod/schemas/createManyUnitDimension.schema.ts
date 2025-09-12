import { z } from 'zod';
import { UnitDimensionCreateManyInputObjectSchema } from './objects/UnitDimensionCreateManyInput.schema';

export const UnitDimensionCreateManySchema = z.object({ data: z.union([ UnitDimensionCreateManyInputObjectSchema, z.array(UnitDimensionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })