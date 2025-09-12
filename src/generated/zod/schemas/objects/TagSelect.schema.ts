import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  product_id: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const TagSelectObjectSchema: z.ZodType<Prisma.TagSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagSelect>;
export const TagSelectObjectZodSchema = makeSchema();
