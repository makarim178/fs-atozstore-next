import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';

export const ImageFindUniqueOrThrowSchema: z.ZodType<Prisma.ImageFindUniqueOrThrowArgs> = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), where: ImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ImageFindUniqueOrThrowArgs>;

export const ImageFindUniqueOrThrowZodSchema = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), where: ImageWhereUniqueInputObjectSchema }).strict();