import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  barcode: z.boolean().optional(),
  qrcode: z.boolean().optional(),
  product_id: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const MetaSelectObjectSchema: z.ZodType<Prisma.MetaSelect> = makeSchema() as unknown as z.ZodType<Prisma.MetaSelect>;
export const MetaSelectObjectZodSchema = makeSchema();
