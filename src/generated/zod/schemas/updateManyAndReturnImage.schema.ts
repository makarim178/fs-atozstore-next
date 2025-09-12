import { z } from 'zod';
import { ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageUpdateManyMutationInputObjectSchema } from './objects/ImageUpdateManyMutationInput.schema';
import { ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';

export const ImageUpdateManyAndReturnSchema = z.object({ select: ImageSelectObjectSchema.optional(), data: ImageUpdateManyMutationInputObjectSchema, where: ImageWhereInputObjectSchema.optional()  }).strict()