import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutImagesNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutImagesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutImagesNestedInputObjectSchema).optional()
}).strict();
export const ImageUpdateInputObjectSchema: z.ZodType<Prisma.ImageUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateInput>;
export const ImageUpdateInputObjectZodSchema = makeSchema();
