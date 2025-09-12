import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductCreateNestedOneWithoutTagsInputObjectSchema } from './ProductCreateNestedOneWithoutTagsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  product: z.lazy(() => ProductCreateNestedOneWithoutTagsInputObjectSchema)
}).strict();
export const TagCreateInputObjectSchema: z.ZodType<Prisma.TagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateInput>;
export const TagCreateInputObjectZodSchema = makeSchema();
