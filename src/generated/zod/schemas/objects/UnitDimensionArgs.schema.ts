import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UnitDimensionSelectObjectSchema } from './UnitDimensionSelect.schema';
import { UnitDimensionIncludeObjectSchema } from './UnitDimensionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UnitDimensionSelectObjectSchema).optional(),
  include: z.lazy(() => UnitDimensionIncludeObjectSchema).optional()
}).strict();
export const UnitDimensionArgsObjectSchema = makeSchema();
export const UnitDimensionArgsObjectZodSchema = makeSchema();
