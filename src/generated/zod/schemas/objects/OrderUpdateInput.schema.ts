import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { OrderItemUpdateManyWithoutOrdersNestedInputObjectSchema } from './OrderItemUpdateManyWithoutOrdersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  session_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  total: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order_items: z.lazy(() => OrderItemUpdateManyWithoutOrdersNestedInputObjectSchema).optional()
}).strict();
export const OrderUpdateInputObjectSchema: z.ZodType<Prisma.OrderUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateInput>;
export const OrderUpdateInputObjectZodSchema = makeSchema();
