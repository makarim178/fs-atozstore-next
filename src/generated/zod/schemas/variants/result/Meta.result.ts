import { z } from 'zod';

// prettier-ignore
export const MetaResultSchema = z.object({
    id: z.string(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    barcode: z.string().nullable(),
    qrcode: z.string().nullable(),
    product_id: z.string(),
    product: z.unknown()
}).strict();

export type MetaResultType = z.infer<typeof MetaResultSchema>;
