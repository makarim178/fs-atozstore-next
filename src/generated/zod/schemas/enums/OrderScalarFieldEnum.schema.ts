import { z } from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id', 'session_id', 'total', 'created_at'])

export type OrderScalarFieldEnum = z.infer<typeof OrderScalarFieldEnumSchema>;