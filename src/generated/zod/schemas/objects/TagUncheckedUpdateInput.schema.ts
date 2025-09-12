import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateInput>;
export const TagUncheckedUpdateInputObjectZodSchema = makeSchema();
