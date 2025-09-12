import { z } from 'zod';
import { OrderItemSelectObjectSchema } from './objects/OrderItemSelect.schema';
import { OrderItemIncludeObjectSchema } from './objects/OrderItemInclude.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemDeleteOneSchema = z.object({ select: OrderItemSelectObjectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), where: OrderItemWhereUniqueInputObjectSchema  })