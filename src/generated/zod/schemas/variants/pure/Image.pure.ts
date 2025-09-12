import { z } from 'zod';

// prettier-ignore
export const ImageModelSchema = z.object({
    id: z.string(),
    product_id: z.string(),
    url: z.string(),
    product: z.unknown()
}).strict();

export type ImageModelType = z.infer<typeof ImageModelSchema>;
