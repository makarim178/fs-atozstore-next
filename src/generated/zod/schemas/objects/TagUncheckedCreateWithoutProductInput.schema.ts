import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();
export const TagUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateWithoutProductInput>;
export const TagUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
