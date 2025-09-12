import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  weight: z.number(),
  unit: z.string().optional(),
  height: z.number(),
  width: z.number(),
  depth: z.number()
}).strict();
export const UnitDimensionCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.UnitDimensionCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionCreateWithoutProductInput>;
export const UnitDimensionCreateWithoutProductInputObjectZodSchema = makeSchema();
