import { z } from 'zod';

export const UnitDimensionScalarFieldEnumSchema = z.enum(['id', 'product_id', 'weight', 'unit', 'height', 'width', 'depth'])

export type UnitDimensionScalarFieldEnum = z.infer<typeof UnitDimensionScalarFieldEnumSchema>;