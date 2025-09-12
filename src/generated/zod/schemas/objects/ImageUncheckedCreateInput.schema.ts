import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  product_id: z.string(),
  url: z.string()
}).strict();
export const ImageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateInput>;
export const ImageUncheckedCreateInputObjectZodSchema = makeSchema();
