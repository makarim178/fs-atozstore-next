import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { CartItemUpdateManyWithoutCartsNestedInputObjectSchema } from './CartItemUpdateManyWithoutCartsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  session_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_ordered: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cart_items: z.lazy(() => CartItemUpdateManyWithoutCartsNestedInputObjectSchema).optional()
}).strict();
export const CartUpdateInputObjectSchema: z.ZodType<Prisma.CartUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUpdateInput>;
export const CartUpdateInputObjectZodSchema = makeSchema();
