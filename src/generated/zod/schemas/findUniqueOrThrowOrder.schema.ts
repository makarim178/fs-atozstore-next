import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderIncludeObjectSchema } from './objects/OrderInclude.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';

export const OrderFindUniqueOrThrowSchema: z.ZodType<Prisma.OrderFindUniqueOrThrowArgs> = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), where: OrderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrderFindUniqueOrThrowArgs>;

export const OrderFindUniqueOrThrowZodSchema = z.object({ select: OrderSelectObjectSchema.optional(), include: OrderIncludeObjectSchema.optional(), where: OrderWhereUniqueInputObjectSchema }).strict();