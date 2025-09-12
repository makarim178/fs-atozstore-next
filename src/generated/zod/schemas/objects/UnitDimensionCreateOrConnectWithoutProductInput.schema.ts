import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UnitDimensionWhereUniqueInputObjectSchema } from './UnitDimensionWhereUniqueInput.schema';
import { UnitDimensionCreateWithoutProductInputObjectSchema } from './UnitDimensionCreateWithoutProductInput.schema';
import { UnitDimensionUncheckedCreateWithoutProductInputObjectSchema } from './UnitDimensionUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UnitDimensionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UnitDimensionCreateWithoutProductInputObjectSchema), z.lazy(() => UnitDimensionUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const UnitDimensionCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.UnitDimensionCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionCreateOrConnectWithoutProductInput>;
export const UnitDimensionCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
