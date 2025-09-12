import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ReviewIncludeObjectSchema: z.ZodType<Prisma.ReviewInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReviewInclude>;
export const ReviewIncludeObjectZodSchema = makeSchema();
