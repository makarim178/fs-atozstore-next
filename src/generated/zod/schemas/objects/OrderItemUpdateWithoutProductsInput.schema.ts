import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { OrderUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema } from './OrderUpdateOneRequiredWithoutOrder_itemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  orders: z.lazy(() => OrderUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema).optional()
}).strict();
export const OrderItemUpdateWithoutProductsInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateWithoutProductsInput>;
export const OrderItemUpdateWithoutProductsInputObjectZodSchema = makeSchema();
