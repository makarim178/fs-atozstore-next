import { z } from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  product_id: z.string(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const ReviewUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateInput>;
export const ReviewUncheckedCreateInputObjectZodSchema = makeSchema();
