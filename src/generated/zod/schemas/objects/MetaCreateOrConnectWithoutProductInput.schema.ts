import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { MetaWhereUniqueInputObjectSchema } from './MetaWhereUniqueInput.schema';
import { MetaCreateWithoutProductInputObjectSchema } from './MetaCreateWithoutProductInput.schema';
import { MetaUncheckedCreateWithoutProductInputObjectSchema } from './MetaUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MetaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MetaCreateWithoutProductInputObjectSchema), z.lazy(() => MetaUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const MetaCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.MetaCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaCreateOrConnectWithoutProductInput>;
export const MetaCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
