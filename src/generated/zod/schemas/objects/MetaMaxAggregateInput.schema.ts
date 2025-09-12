import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  barcode: z.literal(true).optional(),
  qrcode: z.literal(true).optional(),
  product_id: z.literal(true).optional()
}).strict();
export const MetaMaxAggregateInputObjectSchema: z.ZodType<Prisma.MetaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MetaMaxAggregateInputType>;
export const MetaMaxAggregateInputObjectZodSchema = makeSchema();
