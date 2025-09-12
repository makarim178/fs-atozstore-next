import { z } from 'zod';
import { ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageCreateManyInputObjectSchema } from './objects/ImageCreateManyInput.schema';

export const ImageCreateManyAndReturnSchema = z.object({ select: ImageSelectObjectSchema.optional(), data: z.union([ ImageCreateManyInputObjectSchema, z.array(ImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()