import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string()
}).strict();
export const ImageCreateManyProductInputObjectSchema: z.ZodType<Prisma.ImageCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyProductInput>;
export const ImageCreateManyProductInputObjectZodSchema = makeSchema();
