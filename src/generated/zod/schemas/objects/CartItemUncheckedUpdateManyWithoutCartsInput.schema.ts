import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CartItemUncheckedUpdateManyWithoutCartsInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutCartsInput>;
export const CartItemUncheckedUpdateManyWithoutCartsInputObjectZodSchema = makeSchema();
