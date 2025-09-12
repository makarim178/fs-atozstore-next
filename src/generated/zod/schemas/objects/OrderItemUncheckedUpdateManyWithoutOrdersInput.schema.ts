import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const OrderItemUncheckedUpdateManyWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrdersInput>;
export const OrderItemUncheckedUpdateManyWithoutOrdersInputObjectZodSchema = makeSchema();
