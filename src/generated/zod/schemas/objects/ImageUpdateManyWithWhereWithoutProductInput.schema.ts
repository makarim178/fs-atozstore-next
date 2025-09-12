import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';
import { ImageUpdateManyMutationInputObjectSchema } from './ImageUpdateManyMutationInput.schema';
import { ImageUncheckedUpdateManyWithoutProductInputObjectSchema } from './ImageUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateManyMutationInputObjectSchema), z.lazy(() => ImageUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ImageUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutProductInput>;
export const ImageUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
