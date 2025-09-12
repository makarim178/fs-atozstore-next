import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  cart_items: z.boolean().optional()
}).strict();
export const CartCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CartCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CartCountOutputTypeSelect>;
export const CartCountOutputTypeSelectObjectZodSchema = makeSchema();
