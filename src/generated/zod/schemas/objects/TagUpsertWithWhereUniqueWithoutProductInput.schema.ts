import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutProductInputObjectSchema } from './TagUpdateWithoutProductInput.schema';
import { TagUncheckedUpdateWithoutProductInputObjectSchema } from './TagUncheckedUpdateWithoutProductInput.schema';
import { TagCreateWithoutProductInputObjectSchema } from './TagCreateWithoutProductInput.schema';
import { TagUncheckedCreateWithoutProductInputObjectSchema } from './TagUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagUpdateWithoutProductInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutProductInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const TagUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutProductInput>;
export const TagUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
