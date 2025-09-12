import { z } from 'zod';

// prettier-ignore
export const UnitDimensionModelSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    weight: z.number(),
    unit: z.string(),
    height: z.number(),
    width: z.number(),
    depth: z.number(),
    product: z.unknown()
}).strict();

export type UnitDimensionModelType = z.infer<typeof UnitDimensionModelSchema>;
