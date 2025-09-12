import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { MetaCreateWithoutProductInputObjectSchema } from './MetaCreateWithoutProductInput.schema';
import { MetaUncheckedCreateWithoutProductInputObjectSchema } from './MetaUncheckedCreateWithoutProductInput.schema';
import { MetaCreateOrConnectWithoutProductInputObjectSchema } from './MetaCreateOrConnectWithoutProductInput.schema';
import { MetaWhereUniqueInputObjectSchema } from './MetaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MetaCreateWithoutProductInputObjectSchema), z.lazy(() => MetaUncheckedCreateWithoutProductInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MetaCreateOrConnectWithoutProductInputObjectSchema).optional(),
  connect: z.lazy(() => MetaWhereUniqueInputObjectSchema).optional()
}).strict();
export const MetaUncheckedCreateNestedOneWithoutProductInputObjectSchema: z.ZodType<Prisma.MetaUncheckedCreateNestedOneWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaUncheckedCreateNestedOneWithoutProductInput>;
export const MetaUncheckedCreateNestedOneWithoutProductInputObjectZodSchema = makeSchema();
