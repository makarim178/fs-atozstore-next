import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderCountOutputTypeSelectObjectSchema } from './OrderCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrderCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const OrderCountOutputTypeArgsObjectSchema = makeSchema();
export const OrderCountOutputTypeArgsObjectZodSchema = makeSchema();
