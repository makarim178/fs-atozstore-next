import { z } from 'zod';

// prettier-ignore
export const ImageResultSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    url: z.string(),
    product: z.unknown()
}).strict();

export type ImageResultType = z.infer<typeof ImageResultSchema>;
