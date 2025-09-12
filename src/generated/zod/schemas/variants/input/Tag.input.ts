import { z } from 'zod';

// prettier-ignore
export const TagInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    product_id: z.string(),
    product: z.unknown()
}).strict();

export type TagInputType = z.infer<typeof TagInputSchema>;
