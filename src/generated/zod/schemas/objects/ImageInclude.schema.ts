import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ImageIncludeObjectSchema: z.ZodType<Prisma.ImageInclude> = makeSchema() as unknown as z.ZodType<Prisma.ImageInclude>;
export const ImageIncludeObjectZodSchema = makeSchema();
