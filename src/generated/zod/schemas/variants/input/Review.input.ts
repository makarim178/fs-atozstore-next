import { z } from 'zod';

// prettier-ignore
export const ReviewInputSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    rating: z.number(),
    comment: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    product: z.unknown()
}).strict();

export type ReviewInputType = z.infer<typeof ReviewInputSchema>;
