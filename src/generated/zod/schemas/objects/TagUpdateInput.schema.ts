import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const TagUpdateInputObjectSchema: z.ZodType<Prisma.TagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateInput>;
export const TagUpdateInputObjectZodSchema = makeSchema();
