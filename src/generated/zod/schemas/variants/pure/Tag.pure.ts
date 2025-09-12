import { z } from 'zod';

// prettier-ignore
export const TagModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    product_id: z.string(),
    product: z.unknown()
}).strict();

export type TagModelType = z.infer<typeof TagModelSchema>;
