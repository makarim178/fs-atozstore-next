import { z } from 'zod';

export const CartScalarFieldEnumSchema = z.enum(['id', 'session_id', 'created_at', 'is_ordered'])

export type CartScalarFieldEnum = z.infer<typeof CartScalarFieldEnumSchema>;