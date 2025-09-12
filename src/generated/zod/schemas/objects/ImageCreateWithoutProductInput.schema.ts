import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string()
}).strict();
export const ImageCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateWithoutProductInput>;
export const ImageCreateWithoutProductInputObjectZodSchema = makeSchema();
