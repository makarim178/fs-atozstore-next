import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutProductInputObjectSchema } from './ImageUpdateWithoutProductInput.schema';
import { ImageUncheckedUpdateWithoutProductInputObjectSchema } from './ImageUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateWithoutProductInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const ImageUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutProductInput>;
export const ImageUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
