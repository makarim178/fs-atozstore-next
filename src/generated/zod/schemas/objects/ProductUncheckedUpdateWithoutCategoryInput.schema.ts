import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CartItemUncheckedUpdateManyWithoutProductsNestedInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutProductsNestedInput.schema';
import { ImageUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ImageUncheckedUpdateManyWithoutProductNestedInput.schema';
import { MetaUncheckedUpdateOneWithoutProductNestedInputObjectSchema } from './MetaUncheckedUpdateOneWithoutProductNestedInput.schema';
import { OrderItemUncheckedUpdateManyWithoutProductsNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutProductsNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutProductNestedInput.schema';
import { TagUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './TagUncheckedUpdateManyWithoutProductNestedInput.schema';
import { UnitDimensionUncheckedUpdateOneWithoutProductNestedInputObjectSchema } from './UnitDimensionUncheckedUpdateOneWithoutProductNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sku: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  brand_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  discount_percentage: z.union([z.number(), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rating: z.union([z.number(), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  stock: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  warranty_information: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  shipping_information: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  return_policy: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  minimum_order_quantity: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isAvailable: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  thumbnail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cart_items: z.lazy(() => CartItemUncheckedUpdateManyWithoutProductsNestedInputObjectSchema).optional(),
  images: z.lazy(() => ImageUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  meta: z.lazy(() => MetaUncheckedUpdateOneWithoutProductNestedInputObjectSchema).optional(),
  order_items: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductsNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  unit_dimension: z.lazy(() => UnitDimensionUncheckedUpdateOneWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUncheckedUpdateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
export const ProductUncheckedUpdateWithoutCategoryInputObjectZodSchema = makeSchema();
