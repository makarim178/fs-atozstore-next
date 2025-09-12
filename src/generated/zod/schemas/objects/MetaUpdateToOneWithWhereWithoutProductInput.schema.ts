import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { MetaWhereInputObjectSchema } from './MetaWhereInput.schema';
import { MetaUpdateWithoutProductInputObjectSchema } from './MetaUpdateWithoutProductInput.schema';
import { MetaUncheckedUpdateWithoutProductInputObjectSchema } from './MetaUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MetaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MetaUpdateWithoutProductInputObjectSchema), z.lazy(() => MetaUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const MetaUpdateToOneWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.MetaUpdateToOneWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.MetaUpdateToOneWithWhereWithoutProductInput>;
export const MetaUpdateToOneWithWhereWithoutProductInputObjectZodSchema = makeSchema();
