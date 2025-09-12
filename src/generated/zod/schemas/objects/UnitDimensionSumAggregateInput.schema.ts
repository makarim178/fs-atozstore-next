import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  weight: z.literal(true).optional(),
  height: z.literal(true).optional(),
  width: z.literal(true).optional(),
  depth: z.literal(true).optional()
}).strict();
export const UnitDimensionSumAggregateInputObjectSchema: z.ZodType<Prisma.UnitDimensionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionSumAggregateInputType>;
export const UnitDimensionSumAggregateInputObjectZodSchema = makeSchema();
