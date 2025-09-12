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
export const UnitDimensionUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.UnitDimensionUncheckedCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionUncheckedCreateWithoutProductInput>;
export const UnitDimensionUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
