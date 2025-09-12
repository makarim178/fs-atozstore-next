import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  weight: z.literal(true).optional(),
  height: z.literal(true).optional(),
  width: z.literal(true).optional(),
  depth: z.literal(true).optional()
}).strict();
export const UnitDimensionAvgAggregateInputObjectSchema: z.ZodType<Prisma.UnitDimensionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionAvgAggregateInputType>;
export const UnitDimensionAvgAggregateInputObjectZodSchema = makeSchema();
