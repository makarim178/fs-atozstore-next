import { z } from 'zod';
import { OrderItemSelectObjectSchema } from './objects/OrderItemSelect.schema';
import { OrderItemCreateManyInputObjectSchema } from './objects/OrderItemCreateManyInput.schema';

export const OrderItemCreateManyAndReturnSchema = z.object({ select: OrderItemSelectObjectSchema.optional(), data: z.union([ OrderItemCreateManyInputObjectSchema, z.array(OrderItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()