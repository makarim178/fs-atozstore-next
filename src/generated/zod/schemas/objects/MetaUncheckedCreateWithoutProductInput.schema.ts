import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  barcode: z.string().optional().nullable(),
  qrcode: z.string().optional().nullable()
}).strict();
export const MetaUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.MetaUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaUncheckedCreateWithoutProductInput>;
export const MetaUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
