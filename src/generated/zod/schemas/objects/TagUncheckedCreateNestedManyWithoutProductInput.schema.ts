import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { TagCreateWithoutProductInputObjectSchema } from './TagCreateWithoutProductInput.schema';
import { TagUncheckedCreateWithoutProductInputObjectSchema } from './TagUncheckedCreateWithoutProductInput.schema';
import { TagCreateOrConnectWithoutProductInputObjectSchema } from './TagCreateOrConnectWithoutProductInput.schema';
import { TagCreateManyProductInputEnvelopeObjectSchema } from './TagCreateManyProductInputEnvelope.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutProductInputObjectSchema), z.lazy(() => TagCreateWithoutProductInputObjectSchema).array(), z.lazy(() => TagUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => TagCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagCreateManyProductInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagUncheckedCreateNestedManyWithoutProductInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutProductInput>;
export const TagUncheckedCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
