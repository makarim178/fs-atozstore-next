import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ImageSelectObjectSchema } from './ImageSelect.schema';
import { ImageIncludeObjectSchema } from './ImageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ImageSelectObjectSchema).optional(),
  include: z.lazy(() => ImageIncludeObjectSchema).optional()
}).strict();
export const ImageArgsObjectSchema = makeSchema();
export const ImageArgsObjectZodSchema = makeSchema();
