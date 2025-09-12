import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  product_id: z.literal(true).optional(),
  weight: z.literal(true).optional(),
  unit: z.literal(true).optional(),
  height: z.literal(true).optional(),
  width: z.literal(true).optional(),
  depth: z.literal(true).optional()
}).strict();
export const UnitDimensionMaxAggregateInputObjectSchema: z.ZodType<Prisma.UnitDimensionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionMaxAggregateInputType>;
export const UnitDimensionMaxAggregateInputObjectZodSchema = makeSchema();
