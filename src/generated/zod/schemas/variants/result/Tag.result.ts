import { z } from 'zod';

// prettier-ignore
export const TagResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    product_id: z.string(),
    product: z.unknown()
}).strict();

export type TagResultType = z.infer<typeof TagResultSchema>;
