import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemCreateManyCartsInputObjectSchema } from './CartItemCreateManyCartsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CartItemCreateManyCartsInputObjectSchema), z.lazy(() => CartItemCreateManyCartsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CartItemCreateManyCartsInputEnvelopeObjectSchema: z.ZodType<Prisma.CartItemCreateManyCartsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyCartsInputEnvelope>;
export const CartItemCreateManyCartsInputEnvelopeObjectZodSchema = makeSchema();
