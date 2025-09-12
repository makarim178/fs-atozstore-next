import { z } from 'zod';
import { OrderItemSelectObjectSchema } from './objects/OrderItemSelect.schema';
import { OrderItemIncludeObjectSchema } from './objects/OrderItemInclude.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';
import { OrderItemCreateInputObjectSchema } from './objects/OrderItemCreateInput.schema';
import { OrderItemUncheckedCreateInputObjectSchema } from './objects/OrderItemUncheckedCreateInput.schema';
import { OrderItemUpdateInputObjectSchema } from './objects/OrderItemUpdateInput.schema';
import { OrderItemUncheckedUpdateInputObjectSchema } from './objects/OrderItemUncheckedUpdateInput.schema';

export const OrderItemUpsertSchema = z.object({ select: OrderItemSelectObjectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), where: OrderItemWhereUniqueInputObjectSchema, create: z.union([ OrderItemCreateInputObjectSchema, OrderItemUncheckedCreateInputObjectSchema ]), update: z.union([ OrderItemUpdateInputObjectSchema, OrderItemUncheckedUpdateInputObjectSchema ])  })