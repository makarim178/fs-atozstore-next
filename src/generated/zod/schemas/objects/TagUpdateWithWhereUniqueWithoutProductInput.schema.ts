import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutProductInputObjectSchema } from './TagUpdateWithoutProductInput.schema';
import { TagUncheckedUpdateWithoutProductInputObjectSchema } from './TagUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagUpdateWithoutProductInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const TagUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutProductInput>;
export const TagUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
