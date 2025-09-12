import { z } from 'zod';
import { OrderItemSelectObjectSchema } from './objects/OrderItemSelect.schema';
import { OrderItemIncludeObjectSchema } from './objects/OrderItemInclude.schema';
import { OrderItemUpdateInputObjectSchema } from './objects/OrderItemUpdateInput.schema';
import { OrderItemUncheckedUpdateInputObjectSchema } from './objects/OrderItemUncheckedUpdateInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemUpdateOneSchema = z.object({ select: OrderItemSelectObjectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), data: z.union([OrderItemUpdateInputObjectSchema, OrderItemUncheckedUpdateInputObjectSchema]), where: OrderItemWhereUniqueInputObjectSchema  })