import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ImageCreateWithoutProductInputObjectSchema } from './ImageCreateWithoutProductInput.schema';
import { ImageUncheckedCreateWithoutProductInputObjectSchema } from './ImageUncheckedCreateWithoutProductInput.schema';
import { ImageCreateOrConnectWithoutProductInputObjectSchema } from './ImageCreateOrConnectWithoutProductInput.schema';
import { ImageUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ImageUpsertWithWhereUniqueWithoutProductInput.schema';
import { ImageCreateManyProductInputEnvelopeObjectSchema } from './ImageCreateManyProductInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ImageUpdateWithWhereUniqueWithoutProductInput.schema';
import { ImageUpdateManyWithWhereWithoutProductInputObjectSchema } from './ImageUpdateManyWithWhereWithoutProductInput.schema';
import { ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutProductInputObjectSchema), z.lazy(() => ImageCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImageUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImageUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImageUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImageUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithoutProductNestedInput>;
export const ImageUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();
