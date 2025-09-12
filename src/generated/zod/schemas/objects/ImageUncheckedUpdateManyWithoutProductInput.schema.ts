import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ImageUncheckedUpdateManyWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutProductInput>;
export const ImageUncheckedUpdateManyWithoutProductInputObjectZodSchema = makeSchema();
