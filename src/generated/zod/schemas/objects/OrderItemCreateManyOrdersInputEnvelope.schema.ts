import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemCreateManyOrdersInputObjectSchema } from './OrderItemCreateManyOrdersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrderItemCreateManyOrdersInputObjectSchema), z.lazy(() => OrderItemCreateManyOrdersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrderItemCreateManyOrdersInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderItemCreateManyOrdersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateManyOrdersInputEnvelope>;
export const OrderItemCreateManyOrdersInputEnvelopeObjectZodSchema = makeSchema();
