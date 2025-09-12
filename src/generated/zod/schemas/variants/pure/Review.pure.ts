import { z } from 'zod';

// prettier-ignore
export const ReviewModelSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    rating: z.number(),
    comment: z.string().nullable(),
    created_at: z.date().nullable(),
    product: z.unknown()
}).strict();

export type ReviewModelType = z.infer<typeof ReviewModelSchema>;
