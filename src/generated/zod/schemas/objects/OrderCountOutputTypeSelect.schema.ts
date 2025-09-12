import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  order_items: z.boolean().optional()
}).strict();
export const OrderCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrderCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrderCountOutputTypeSelect>;
export const OrderCountOutputTypeSelectObjectZodSchema = makeSchema();
