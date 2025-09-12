import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  product_id: z.string()
}).strict();
export const TagCreateManyInputObjectSchema: z.ZodType<Prisma.TagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateManyInput>;
export const TagCreateManyInputObjectZodSchema = makeSchema();
