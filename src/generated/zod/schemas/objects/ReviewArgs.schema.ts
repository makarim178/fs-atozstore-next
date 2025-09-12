import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReviewSelectObjectSchema } from './ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './ReviewInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReviewSelectObjectSchema).optional(),
  include: z.lazy(() => ReviewIncludeObjectSchema).optional()
}).strict();
export const ReviewArgsObjectSchema = makeSchema();
export const ReviewArgsObjectZodSchema = makeSchema();
