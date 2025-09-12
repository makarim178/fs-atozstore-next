import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutProductInputObjectSchema } from './ImageCreateWithoutProductInput.schema';
import { ImageUncheckedCreateWithoutProductInputObjectSchema } from './ImageUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutProductInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutProductInput>;
export const ImageCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
