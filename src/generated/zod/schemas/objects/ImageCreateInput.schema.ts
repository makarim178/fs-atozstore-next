import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateNestedOneWithoutImagesInputObjectSchema } from './ProductCreateNestedOneWithoutImagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  product: z.lazy(() => ProductCreateNestedOneWithoutImagesInputObjectSchema)
}).strict();
export const ImageCreateInputObjectSchema: z.ZodType<Prisma.ImageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateInput>;
export const ImageCreateInputObjectZodSchema = makeSchema();
