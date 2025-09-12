import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutProductInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutProductInput>;
export const ReviewUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
