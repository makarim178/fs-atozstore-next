import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { MetaCreateWithoutProductInputObjectSchema } from './MetaCreateWithoutProductInput.schema';
import { MetaUncheckedCreateWithoutProductInputObjectSchema } from './MetaUncheckedCreateWithoutProductInput.schema';
import { MetaCreateOrConnectWithoutProductInputObjectSchema } from './MetaCreateOrConnectWithoutProductInput.schema';
import { MetaUpsertWithoutProductInputObjectSchema } from './MetaUpsertWithoutProductInput.schema';
import { MetaWhereInputObjectSchema } from './MetaWhereInput.schema';
import { MetaWhereUniqueInputObjectSchema } from './MetaWhereUniqueInput.schema';
import { MetaUpdateToOneWithWhereWithoutProductInputObjectSchema } from './MetaUpdateToOneWithWhereWithoutProductInput.schema';
import { MetaUpdateWithoutProductInputObjectSchema } from './MetaUpdateWithoutProductInput.schema';
import { MetaUncheckedUpdateWithoutProductInputObjectSchema } from './MetaUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MetaCreateWithoutProductInputObjectSchema), z.lazy(() => MetaUncheckedCreateWithoutProductInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MetaCreateOrConnectWithoutProductInputObjectSchema).optional(),
  upsert: z.lazy(() => MetaUpsertWithoutProductInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MetaWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MetaWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MetaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MetaUpdateToOneWithWhereWithoutProductInputObjectSchema), z.lazy(() => MetaUpdateWithoutProductInputObjectSchema), z.lazy(() => MetaUncheckedUpdateWithoutProductInputObjectSchema)]).optional()
}).strict();
export const MetaUncheckedUpdateOneWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.MetaUncheckedUpdateOneWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaUncheckedUpdateOneWithoutProductNestedInput>;
export const MetaUncheckedUpdateOneWithoutProductNestedInputObjectZodSchema = makeSchema();
