import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CartUpdateOneRequiredWithoutCart_itemsNestedInputObjectSchema } from './CartUpdateOneRequiredWithoutCart_itemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carts: z.lazy(() => CartUpdateOneRequiredWithoutCart_itemsNestedInputObjectSchema).optional()
}).strict();
export const CartItemUpdateWithoutProductsInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateWithoutProductsInput>;
export const CartItemUpdateWithoutProductsInputObjectZodSchema = makeSchema();
