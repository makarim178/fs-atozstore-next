import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  barcode: z.string().optional().nullable(),
  qrcode: z.string().optional().nullable(),
  product_id: z.string()
}).strict();
export const MetaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MetaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaUncheckedCreateInput>;
export const MetaUncheckedCreateInputObjectZodSchema = makeSchema();
