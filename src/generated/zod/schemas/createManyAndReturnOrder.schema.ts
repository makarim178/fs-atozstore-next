import { z } from 'zod';
import { OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderCreateManyInputObjectSchema } from './objects/OrderCreateManyInput.schema';

export const OrderCreateManyAndReturnSchema = z.object({ select: OrderSelectObjectSchema.optional(), data: z.union([ OrderCreateManyInputObjectSchema, z.array(OrderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()