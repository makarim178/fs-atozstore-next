import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  product_id: z.string(),
  weight: z.number(),
  unit: z.string().optional(),
  height: z.number(),
  width: z.number(),
  depth: z.number()
}).strict();
export const UnitDimensionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UnitDimensionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionUncheckedCreateInput>;
export const UnitDimensionUncheckedCreateInputObjectZodSchema = makeSchema();
