import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();
export const TagCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.TagCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateWithoutProductInput>;
export const TagCreateWithoutProductInputObjectZodSchema = makeSchema();
