import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TagUncheckedUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateWithoutProductInput>;
export const TagUncheckedUpdateWithoutProductInputObjectZodSchema = makeSchema();
