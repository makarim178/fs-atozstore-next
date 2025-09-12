import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  url: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ImageSelectObjectSchema: z.ZodType<Prisma.ImageSelect> = makeSchema() as unknown as z.ZodType<Prisma.ImageSelect>;
export const ImageSelectObjectZodSchema = makeSchema();
