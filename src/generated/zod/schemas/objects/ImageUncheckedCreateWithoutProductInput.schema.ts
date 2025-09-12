import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string()
}).strict();
export const ImageUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateWithoutProductInput>;
export const ImageUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
