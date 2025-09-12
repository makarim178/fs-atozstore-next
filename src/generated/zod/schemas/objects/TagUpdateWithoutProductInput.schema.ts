import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TagUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.TagUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateWithoutProductInput>;
export const TagUpdateWithoutProductInputObjectZodSchema = makeSchema();
