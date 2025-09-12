import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ImageUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithoutProductInput>;
export const ImageUpdateWithoutProductInputObjectZodSchema = makeSchema();
