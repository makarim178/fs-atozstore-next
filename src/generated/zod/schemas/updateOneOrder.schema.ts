import { z } from 'zod';
import { OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderIncludeObjectSchema } from './objects/OrderInclude.schema';
import { OrderUpdateInputObjectSchema } from './objects/OrderUpdateInput.schema';
import { OrderUncheckedUpdateInputObjectSchema } from './objects/OrderUncheckedUpdateInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';

export const OrderUpdateOneSchema = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), data: z.union([OrderUpdateInputObjectSchema, OrderUncheckedUpdateInputObjectSchema]), where: OrderWhereUniqueInputObjectSchema  })