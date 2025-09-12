import { z } from 'zod';

export const MetaScalarFieldEnumSchema = z.enum(['id', 'created_at', 'updated_at', 'barcode', 'qrcode', 'product_id'])

export type MetaScalarFieldEnum = z.infer<typeof MetaScalarFieldEnumSchema>;