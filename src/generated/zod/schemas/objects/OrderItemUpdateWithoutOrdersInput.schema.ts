import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutOrder_itemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  products: z.lazy(() => ProductUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema).optional()
}).strict();
export const OrderItemUpdateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateWithoutOrdersInput>;
export const OrderItemUpdateWithoutOrdersInputObjectZodSchema = makeSchema();
