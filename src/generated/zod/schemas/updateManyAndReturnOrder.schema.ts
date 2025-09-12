import { z } from 'zod';
import { OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderUpdateManyMutationInputObjectSchema } from './objects/OrderUpdateManyMutationInput.schema';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';

export const OrderUpdateManyAndReturnSchema = z.object({ select: OrderSelectObjectSchema.optional(), data: OrderUpdateManyMutationInputObjectSchema, where: OrderWhereInputObjectSchema.optional()  }).strict()