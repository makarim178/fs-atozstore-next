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
import { CartItemUpdateManyWithoutProductsNestedInputObjectSchema } from './CartItemUpdateManyWithoutProductsNestedInput.schema';
import { ImageUpdateManyWithoutProductNestedInputObjectSchema } from './ImageUpdateManyWithoutProductNestedInput.schema';
import { MetaUpdateOneWithoutProductNestedInputObjectSchema } from './MetaUpdateOneWithoutProductNestedInput.schema';
import { OrderItemUpdateManyWithoutProductsNestedInputObjectSchema } from './OrderItemUpdateManyWithoutProductsNestedInput.schema';
import { BrandUpdateOneRequiredWithoutProductsNestedInputObjectSchema } from './BrandUpdateOneRequiredWithoutProductsNestedInput.schema';
import { CategoryUpdateOneRequiredWithoutProductsNestedInputObjectSchema } from './CategoryUpdateOneRequiredWithoutProductsNestedInput.schema';
import { ReviewUpdateManyWithoutProductNestedInputObjectSchema } from './ReviewUpdateManyWithoutProductNestedInput.schema';
import { UnitDimensionUpdateOneWithoutProductNestedInputObjectSchema } from './UnitDimensionUpdateOneWithoutProductNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sku: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
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
  cart_items: z.lazy(() => CartItemUpdateManyWithoutProductsNestedInputObjectSchema).optional(),
  images: z.lazy(() => ImageUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  meta: z.lazy(() => MetaUpdateOneWithoutProductNestedInputObjectSchema).optional(),
  order_items: z.lazy(() => OrderItemUpdateManyWithoutProductsNestedInputObjectSchema).optional(),
  brand: z.lazy(() => BrandUpdateOneRequiredWithoutProductsNestedInputObjectSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutProductNestedInputObjectSchema).optional(),
  unit_dimension: z.lazy(() => UnitDimensionUpdateOneWithoutProductNestedInputObjectSchema).optional()
}).strict();
export const ProductUpdateWithoutTagsInputObjectSchema: z.ZodType<Prisma.ProductUpdateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateWithoutTagsInput>;
export const ProductUpdateWithoutTagsInputObjectZodSchema = makeSchema();
