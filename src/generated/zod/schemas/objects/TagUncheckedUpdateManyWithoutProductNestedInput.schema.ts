import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { TagCreateWithoutProductInputObjectSchema } from './TagCreateWithoutProductInput.schema';
import { TagUncheckedCreateWithoutProductInputObjectSchema } from './TagUncheckedCreateWithoutProductInput.schema';
import { TagCreateOrConnectWithoutProductInputObjectSchema } from './TagCreateOrConnectWithoutProductInput.schema';
import { TagUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './TagUpsertWithWhereUniqueWithoutProductInput.schema';
import { TagCreateManyProductInputEnvelopeObjectSchema } from './TagCreateManyProductInputEnvelope.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './TagUpdateWithWhereUniqueWithoutProductInput.schema';
import { TagUpdateManyWithWhereWithoutProductInputObjectSchema } from './TagUpdateManyWithWhereWithoutProductInput.schema';
import { TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutProductInputObjectSchema), z.lazy(() => TagCreateWithoutProductInputObjectSchema).array(), z.lazy(() => TagUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => TagCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => TagUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagWhereUniqueInputObjectSchema), z.lazy(() => TagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => TagUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => TagUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagScalarWhereInputObjectSchema), z.lazy(() => TagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagUncheckedUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateManyWithoutProductNestedInput>;
export const TagUncheckedUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();
