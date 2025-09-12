import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const MetaIncludeObjectSchema: z.ZodType<Prisma.MetaInclude> = makeSchema() as unknown as z.ZodType<Prisma.MetaInclude>;
export const MetaIncludeObjectZodSchema = makeSchema();
