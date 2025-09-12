import { z } from 'zod';
import { OrderItemSelectObjectSchema } from './objects/OrderItemSelect.schema';
import { OrderItemIncludeObjectSchema } from './objects/OrderItemInclude.schema';
import { OrderItemCreateInputObjectSchema } from './objects/OrderItemCreateInput.schema';
import { OrderItemUncheckedCreateInputObjectSchema } from './objects/OrderItemUncheckedCreateInput.schema';

export const OrderItemCreateOneSchema = z.object({ select: OrderItemSelectObjectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), data: z.union([OrderItemCreateInputObjectSchema, OrderItemUncheckedCreateInputObjectSchema])  })