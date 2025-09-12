import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReviewOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReviewOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewOrderByRelationAggregateInput>;
export const ReviewOrderByRelationAggregateInputObjectZodSchema = makeSchema();
