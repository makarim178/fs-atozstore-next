import { z } from 'zod';

// prettier-ignore
export const MetaInputSchema = z.object({
    id: z.string(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    barcode: z.string().optional().nullable(),
    qrcode: z.string().optional().nullable(),
    product_id: z.string(),
    product: z.unknown()
}).strict();

export type MetaInputType = z.infer<typeof MetaInputSchema>;
