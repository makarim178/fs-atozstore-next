import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CartUpdateOneRequiredWithoutCart_itemsNestedInputObjectSchema } from './CartUpdateOneRequiredWithoutCart_itemsNestedInput.schema';
import { ProductUpdateOneRequiredWithoutCart_itemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutCart_itemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carts: z.lazy(() => CartUpdateOneRequiredWithoutCart_itemsNestedInputObjectSchema).optional(),
  products: z.lazy(() => ProductUpdateOneRequiredWithoutCart_itemsNestedInputObjectSchema).optional()
}).strict();
export const CartItemUpdateInputObjectSchema: z.ZodType<Prisma.CartItemUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemUpdateInput>;
export const CartItemUpdateInputObjectZodSchema = makeSchema();
