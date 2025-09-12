import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TagUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateManyInput>;
export const TagUncheckedUpdateManyInputObjectZodSchema = makeSchema();
