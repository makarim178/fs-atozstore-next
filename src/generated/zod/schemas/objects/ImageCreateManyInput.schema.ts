import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  product_id: z.string(),
  url: z.string()
}).strict();
export const ImageCreateManyInputObjectSchema: z.ZodType<Prisma.ImageCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyInput>;
export const ImageCreateManyInputObjectZodSchema = makeSchema();
