import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutProductInputObjectSchema } from './ImageUpdateWithoutProductInput.schema';
import { ImageUncheckedUpdateWithoutProductInputObjectSchema } from './ImageUncheckedUpdateWithoutProductInput.schema';
import { ImageCreateWithoutProductInputObjectSchema } from './ImageCreateWithoutProductInput.schema';
import { ImageUncheckedCreateWithoutProductInputObjectSchema } from './ImageUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImageUpdateWithoutProductInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutProductInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ImageUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutProductInput>;
export const ImageUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
