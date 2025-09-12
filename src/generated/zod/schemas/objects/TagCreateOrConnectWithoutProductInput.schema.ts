import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutProductInputObjectSchema } from './TagCreateWithoutProductInput.schema';
import { TagUncheckedCreateWithoutProductInputObjectSchema } from './TagUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCreateWithoutProductInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const TagCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateOrConnectWithoutProductInput>;
export const TagCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
