import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  price: z.literal(true).optional(),
  discount_percentage: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  minimum_order_quantity: z.literal(true).optional()
}).strict();
export const ProductAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductAvgAggregateInputType>;
export const ProductAvgAggregateInputObjectZodSchema = makeSchema();
