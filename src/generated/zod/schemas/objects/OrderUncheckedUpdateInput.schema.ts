import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { OrderItemUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutOrdersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  session_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  total: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order_items: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema).optional()
}).strict();
export const OrderUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedUpdateInput>;
export const OrderUncheckedUpdateInputObjectZodSchema = makeSchema();
