import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UnitDimensionWhereInputObjectSchema } from './UnitDimensionWhereInput.schema';
import { UnitDimensionUpdateWithoutProductInputObjectSchema } from './UnitDimensionUpdateWithoutProductInput.schema';
import { UnitDimensionUncheckedUpdateWithoutProductInputObjectSchema } from './UnitDimensionUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UnitDimensionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UnitDimensionUpdateWithoutProductInputObjectSchema), z.lazy(() => UnitDimensionUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const UnitDimensionUpdateToOneWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.UnitDimensionUpdateToOneWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionUpdateToOneWithWhereWithoutProductInput>;
export const UnitDimensionUpdateToOneWithWhereWithoutProductInputObjectZodSchema = makeSchema();
