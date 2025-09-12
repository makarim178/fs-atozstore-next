import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ImageUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedUpdateManyInput>;
export const ImageUncheckedUpdateManyInputObjectZodSchema = makeSchema();
