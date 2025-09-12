import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id', 'product_id', 'rating', 'comment', 'created_at'])

export type ReviewScalarFieldEnum = z.infer<typeof ReviewScalarFieldEnumSchema>;