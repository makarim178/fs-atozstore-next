import { z } from 'zod';
import { OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderIncludeObjectSchema } from './objects/OrderInclude.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';

export const OrderDeleteOneSchema = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), where: OrderWhereUniqueInputObjectSchema  })