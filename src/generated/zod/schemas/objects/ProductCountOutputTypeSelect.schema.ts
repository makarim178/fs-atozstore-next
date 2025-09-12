import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  cart_items: z.boolean().optional(),
  images: z.boolean().optional(),
  order_items: z.boolean().optional(),
  reviews: z.boolean().optional(),
  tags: z.boolean().optional()
}).strict();
export const ProductCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export const ProductCountOutputTypeSelectObjectZodSchema = makeSchema();
