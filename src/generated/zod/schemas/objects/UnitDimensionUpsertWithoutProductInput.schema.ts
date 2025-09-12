import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UnitDimensionUpdateWithoutProductInputObjectSchema } from './UnitDimensionUpdateWithoutProductInput.schema';
import { UnitDimensionUncheckedUpdateWithoutProductInputObjectSchema } from './UnitDimensionUncheckedUpdateWithoutProductInput.schema';
import { UnitDimensionCreateWithoutProductInputObjectSchema } from './UnitDimensionCreateWithoutProductInput.schema';
import { UnitDimensionUncheckedCreateWithoutProductInputObjectSchema } from './UnitDimensionUncheckedCreateWithoutProductInput.schema';
import { UnitDimensionWhereInputObjectSchema } from './UnitDimensionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UnitDimensionUpdateWithoutProductInputObjectSchema), z.lazy(() => UnitDimensionUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => UnitDimensionCreateWithoutProductInputObjectSchema), z.lazy(() => UnitDimensionUncheckedCreateWithoutProductInputObjectSchema)]),
  where: z.lazy(() => UnitDimensionWhereInputObjectSchema).optional()
}).strict();
export const UnitDimensionUpsertWithoutProductInputObjectSchema: z.ZodType<Prisma.UnitDimensionUpsertWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionUpsertWithoutProductInput>;
export const UnitDimensionUpsertWithoutProductInputObjectZodSchema = makeSchema();
