import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemCreateManyProductsInputObjectSchema } from './OrderItemCreateManyProductsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrderItemCreateManyProductsInputObjectSchema), z.lazy(() => OrderItemCreateManyProductsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrderItemCreateManyProductsInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderItemCreateManyProductsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateManyProductsInputEnvelope>;
export const OrderItemCreateManyProductsInputEnvelopeObjectZodSchema = makeSchema();
