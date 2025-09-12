import { z } from 'zod';

// prettier-ignore
export const MetaModelSchema = z.object({
    id: z.string(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    barcode: z.string().nullable(),
    qrcode: z.string().nullable(),
    product_id: z.string(),
    product: z.unknown()
}).strict();

export type MetaModelType = z.infer<typeof MetaModelSchema>;
