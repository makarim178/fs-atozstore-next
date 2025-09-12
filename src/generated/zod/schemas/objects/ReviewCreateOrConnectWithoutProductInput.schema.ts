import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutProductInput>;
export const ReviewCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
