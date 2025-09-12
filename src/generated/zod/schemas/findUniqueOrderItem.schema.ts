import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { OrderItemSelectObjectSchema } from './objects/OrderItemSelect.schema';
import { OrderItemIncludeObjectSchema } from './objects/OrderItemInclude.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemFindUniqueSchema: z.ZodType<Prisma.OrderItemFindUniqueArgs> = z.object({ select: OrderItemSelectObjectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), where: OrderItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrderItemFindUniqueArgs>;

export const OrderItemFindUniqueZodSchema = z.object({ select: OrderItemSelectObjectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), where: OrderItemWhereUniqueInputObjectSchema }).strict();