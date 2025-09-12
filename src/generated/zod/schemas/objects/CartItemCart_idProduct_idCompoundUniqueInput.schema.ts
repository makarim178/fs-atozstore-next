import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  cart_id: z.string(),
  product_id: z.string()
}).strict();
export const CartItemCart_idProduct_idCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CartItemCart_idProduct_idCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCart_idProduct_idCompoundUniqueInput>;
export const CartItemCart_idProduct_idCompoundUniqueInputObjectZodSchema = makeSchema();
