import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id', 'name', 'product_id'])

export type TagScalarFieldEnum = z.infer<typeof TagScalarFieldEnumSchema>;