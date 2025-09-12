import { z } from 'zod';

// prettier-ignore
export const ImageInputSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    url: z.string(),
    product: z.unknown()
}).strict();

export type ImageInputType = z.infer<typeof ImageInputSchema>;
