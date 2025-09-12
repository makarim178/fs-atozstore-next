import { z } from 'zod';
import { OrderItemSelectObjectSchema } from './objects/OrderItemSelect.schema';
import { OrderItemUpdateManyMutationInputObjectSchema } from './objects/OrderItemUpdateManyMutationInput.schema';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';

export const OrderItemUpdateManyAndReturnSchema = z.object({ select: OrderItemSelectObjectSchema.optional(), data: OrderItemUpdateManyMutationInputObjectSchema, where: OrderItemWhereInputObjectSchema.optional()  }).strict()