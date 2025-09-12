import { z } from 'zod';

// prettier-ignore
export const ReviewResultSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    rating: z.number(),
    comment: z.string().nullable(),
    created_at: z.date().nullable(),
    product: z.unknown()
}).strict();

export type ReviewResultType = z.infer<typeof ReviewResultSchema>;
