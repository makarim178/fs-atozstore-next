import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ImageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ImageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageOrderByRelationAggregateInput>;
export const ImageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
