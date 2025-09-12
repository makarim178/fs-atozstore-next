import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemCreateManyProductsInputObjectSchema } from './CartItemCreateManyProductsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CartItemCreateManyProductsInputObjectSchema), z.lazy(() => CartItemCreateManyProductsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CartItemCreateManyProductsInputEnvelopeObjectSchema: z.ZodType<Prisma.CartItemCreateManyProductsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyProductsInputEnvelope>;
export const CartItemCreateManyProductsInputEnvelopeObjectZodSchema = makeSchema();
