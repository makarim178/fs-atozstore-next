import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { TagCreateManyProductInputObjectSchema } from './TagCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TagCreateManyProductInputObjectSchema), z.lazy(() => TagCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TagCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.TagCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateManyProductInputEnvelope>;
export const TagCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
