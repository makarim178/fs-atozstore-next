import { z } from 'zod';
import { OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderIncludeObjectSchema } from './objects/OrderInclude.schema';
import { OrderCreateInputObjectSchema } from './objects/OrderCreateInput.schema';
import { OrderUncheckedCreateInputObjectSchema } from './objects/OrderUncheckedCreateInput.schema';

export const OrderCreateOneSchema = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), data: z.union([OrderCreateInputObjectSchema, OrderUncheckedCreateInputObjectSchema])  })