import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ImageCreateWithoutProductInputObjectSchema } from './ImageCreateWithoutProductInput.schema';
import { ImageUncheckedCreateWithoutProductInputObjectSchema } from './ImageUncheckedCreateWithoutProductInput.schema';
import { ImageCreateOrConnectWithoutProductInputObjectSchema } from './ImageCreateOrConnectWithoutProductInput.schema';
import { ImageCreateManyProductInputEnvelopeObjectSchema } from './ImageCreateManyProductInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutProductInputObjectSchema), z.lazy(() => ImageCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyProductInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImageCreateNestedManyWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageCreateNestedManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateNestedManyWithoutProductInput>;
export const ImageCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
