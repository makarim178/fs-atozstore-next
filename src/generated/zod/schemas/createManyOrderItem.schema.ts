import { z } from 'zod';
import { OrderItemCreateManyInputObjectSchema } from './objects/OrderItemCreateManyInput.schema';

export const OrderItemCreateManySchema = z.object({ data: z.union([ OrderItemCreateManyInputObjectSchema, z.array(OrderItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })