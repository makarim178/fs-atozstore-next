import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { MetaUpdateWithoutProductInputObjectSchema } from './MetaUpdateWithoutProductInput.schema';
import { MetaUncheckedUpdateWithoutProductInputObjectSchema } from './MetaUncheckedUpdateWithoutProductInput.schema';
import { MetaCreateWithoutProductInputObjectSchema } from './MetaCreateWithoutProductInput.schema';
import { MetaUncheckedCreateWithoutProductInputObjectSchema } from './MetaUncheckedCreateWithoutProductInput.schema';
import { MetaWhereInputObjectSchema } from './MetaWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MetaUpdateWithoutProductInputObjectSchema), z.lazy(() => MetaUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => MetaCreateWithoutProductInputObjectSchema), z.lazy(() => MetaUncheckedCreateWithoutProductInputObjectSchema)]),
  where: z.lazy(() => MetaWhereInputObjectSchema).optional()
}).strict();
export const MetaUpsertWithoutProductInputObjectSchema: z.ZodType<Prisma.MetaUpsertWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaUpsertWithoutProductInput>;
export const MetaUpsertWithoutProductInputObjectZodSchema = makeSchema();
