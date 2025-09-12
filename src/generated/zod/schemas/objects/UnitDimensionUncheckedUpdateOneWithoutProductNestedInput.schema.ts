import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UnitDimensionCreateWithoutProductInputObjectSchema } from './UnitDimensionCreateWithoutProductInput.schema';
import { UnitDimensionUncheckedCreateWithoutProductInputObjectSchema } from './UnitDimensionUncheckedCreateWithoutProductInput.schema';
import { UnitDimensionCreateOrConnectWithoutProductInputObjectSchema } from './UnitDimensionCreateOrConnectWithoutProductInput.schema';
import { UnitDimensionUpsertWithoutProductInputObjectSchema } from './UnitDimensionUpsertWithoutProductInput.schema';
import { UnitDimensionWhereInputObjectSchema } from './UnitDimensionWhereInput.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './UnitDimensionWhereUniqueInput.schema';
import { UnitDimensionUpdateToOneWithWhereWithoutProductInputObjectSchema } from './UnitDimensionUpdateToOneWithWhereWithoutProductInput.schema';
import { UnitDimensionUpdateWithoutProductInputObjectSchema } from './UnitDimensionUpdateWithoutProductInput.schema';
import { UnitDimensionUncheckedUpdateWithoutProductInputObjectSchema } from './UnitDimensionUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UnitDimensionCreateWithoutProductInputObjectSchema), z.lazy(() => UnitDimensionUncheckedCreateWithoutProductInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UnitDimensionCreateOrConnectWithoutProductInputObjectSchema).optional(),
  upsert: z.lazy(() => UnitDimensionUpsertWithoutProductInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UnitDimensionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UnitDimensionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UnitDimensionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UnitDimensionUpdateToOneWithWhereWithoutProductInputObjectSchema), z.lazy(() => UnitDimensionUpdateWithoutProductInputObjectSchema), z.lazy(() => UnitDimensionUncheckedUpdateWithoutProductInputObjectSchema)]).optional()
}).strict();
export const UnitDimensionUncheckedUpdateOneWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.UnitDimensionUncheckedUpdateOneWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UnitDimensionUncheckedUpdateOneWithoutProductNestedInput>;
export const UnitDimensionUncheckedUpdateOneWithoutProductNestedInputObjectZodSchema = makeSchema();
