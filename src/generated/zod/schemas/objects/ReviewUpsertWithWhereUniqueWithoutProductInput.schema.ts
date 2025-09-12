import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutProductInputObjectSchema } from './ReviewUpdateWithoutProductInput.schema';
import { ReviewUncheckedUpdateWithoutProductInputObjectSchema } from './ReviewUncheckedUpdateWithoutProductInput.schema';
import { ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput>;
export const ReviewUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
