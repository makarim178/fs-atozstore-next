import { z } from 'zod';

export const ImageScalarFieldEnumSchema = z.enum(['id', 'product_id', 'url'])

export type ImageScalarFieldEnum = z.infer<typeof ImageScalarFieldEnumSchema>;