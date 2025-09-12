import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema';
import { TagUpdateManyMutationInputObjectSchema } from './TagUpdateManyMutationInput.schema';
import { TagUncheckedUpdateManyWithoutProductInputObjectSchema } from './TagUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputObjectSchema), z.lazy(() => TagUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const TagUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateManyWithWhereWithoutProductInput>;
export const TagUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
