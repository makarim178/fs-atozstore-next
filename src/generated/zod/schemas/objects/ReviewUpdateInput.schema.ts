import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutReviewsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  rating: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  comment: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema).optional()
}).strict();
export const ReviewUpdateInputObjectSchema: z.ZodType<Prisma.ReviewUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateInput>;
export const ReviewUpdateInputObjectZodSchema = makeSchema();
