import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedStringFilterObjectSchema } from './NestedStringFilter.schema'

const nesteduuidwithaggregatesfilterSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const NestedUuidWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = nesteduuidwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedUuidWithAggregatesFilter>;
export const NestedUuidWithAggregatesFilterObjectZodSchema = nesteduuidwithaggregatesfilterSchema;
