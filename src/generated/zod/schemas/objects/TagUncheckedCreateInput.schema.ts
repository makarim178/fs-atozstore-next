import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  product_id: z.string()
}).strict();
export const TagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateInput>;
export const TagUncheckedCreateInputObjectZodSchema = makeSchema();
