import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderIncludeObjectSchema } from './objects/OrderInclude.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';

export const OrderFindUniqueSchema: z.ZodType<Prisma.OrderFindUniqueArgs> = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), where: OrderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrderFindUniqueArgs>;

export const OrderFindUniqueZodSchema = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), where: OrderWhereUniqueInputObjectSchema }).strict();