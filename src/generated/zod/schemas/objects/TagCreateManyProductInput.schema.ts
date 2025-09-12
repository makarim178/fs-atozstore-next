import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();
export const TagCreateManyProductInputObjectSchema: z.ZodType<Prisma.TagCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateManyProductInput>;
export const TagCreateManyProductInputObjectZodSchema = makeSchema();
