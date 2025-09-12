import { z } from 'zod';

// prettier-ignore
export const UnitDimensionResultSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    weight: z.number(),
    unit: z.string(),
    height: z.number(),
    width: z.number(),
    depth: z.number(),
    product: z.unknown()
}).strict();

export type UnitDimensionResultType = z.infer<typeof UnitDimensionResultSchema>;
