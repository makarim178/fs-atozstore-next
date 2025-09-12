import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TagOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TagOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByRelationAggregateInput>;
export const TagOrderByRelationAggregateInputObjectZodSchema = makeSchema();
