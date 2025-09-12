import { z } from 'zod';
import { OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderIncludeObjectSchema } from './objects/OrderInclude.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';
import { OrderCreateInputObjectSchema } from './objects/OrderCreateInput.schema';
import { OrderUncheckedCreateInputObjectSchema } from './objects/OrderUncheckedCreateInput.schema';
import { OrderUpdateInputObjectSchema } from './objects/OrderUpdateInput.schema';
import { OrderUncheckedUpdateInputObjectSchema } from './objects/OrderUncheckedUpdateInput.schema';

export const OrderUpsertSchema = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), where: OrderWhereUniqueInputObjectSchema, create: z.union([ OrderCreateInputObjectSchema, OrderUncheckedCreateInputObjectSchema ]), update: z.union([ OrderUpdateInputObjectSchema, OrderUncheckedUpdateInputObjectSchema ])  })