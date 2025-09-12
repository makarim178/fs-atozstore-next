import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateNestedOneWithoutMetaInputObjectSchema } from './ProductCreateNestedOneWithoutMetaInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  barcode: z.string().optional().nullable(),
  qrcode: z.string().optional().nullable(),
  product: z.lazy(() => ProductCreateNestedOneWithoutMetaInputObjectSchema)
}).strict();
export const MetaCreateInputObjectSchema: z.ZodType<Prisma.MetaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaCreateInput>;
export const MetaCreateInputObjectZodSchema = makeSchema();
