import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { MetaSelectObjectSchema } from './MetaSelect.schema';
import { MetaIncludeObjectSchema } from './MetaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MetaSelectObjectSchema).optional(),
  include: z.lazy(() => MetaIncludeObjectSchema).optional()
}).strict();
export const MetaArgsObjectSchema = makeSchema();
export const MetaArgsObjectZodSchema = makeSchema();
