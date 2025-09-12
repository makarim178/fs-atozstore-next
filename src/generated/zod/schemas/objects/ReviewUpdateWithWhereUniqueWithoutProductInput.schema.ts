import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutProductInputObjectSchema } from './ReviewUpdateWithoutProductInput.schema';
import { ReviewUncheckedUpdateWithoutProductInputObjectSchema } from './ReviewUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutProductInput>;
export const ReviewUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
