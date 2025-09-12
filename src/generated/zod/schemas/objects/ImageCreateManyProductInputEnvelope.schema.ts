import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ImageCreateManyProductInputObjectSchema } from './ImageCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImageCreateManyProductInputObjectSchema), z.lazy(() => ImageCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImageCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.ImageCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyProductInputEnvelope>;
export const ImageCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
