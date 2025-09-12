import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UnitDimensionCreateWithoutProductInputObjectSchema } from './UnitDimensionCreateWithoutProductInput.schema';
import { UnitDimensionUncheckedCreateWithoutProductInputObjectSchema } from './UnitDimensionUncheckedCreateWithoutProductInput.schema';
import { UnitDimensionCreateOrConnectWithoutProductInputObjectSchema } from './UnitDimensionCreateOrConnectWithoutProductInput.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './UnitDimensionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UnitDimensionCreateWithoutProductInputObjectSchema), z.lazy(() => UnitDimensionUncheckedCreateWithoutProductInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UnitDimensionCreateOrConnectWithoutProductInputObjectSchema).optional(),
  connect: z.lazy(() => UnitDimensionWhereUniqueInputObjectSchema).optional()
}).strict();
export const UnitDimensionCreateNestedOneWithoutProductInputObjectSchema: z.ZodType<Prisma.UnitDimensionCreateNestedOneWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionCreateNestedOneWithoutProductInput>;
export const UnitDimensionCreateNestedOneWithoutProductInputObjectZodSchema = makeSchema();
