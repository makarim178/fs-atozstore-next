import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageOrderByWithRelationInputObjectSchema } from './objects/ImageOrderByWithRelationInput.schema';
import { ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageScalarFieldEnumSchema } from './enums/ImageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ImageFindManySelectSchema: z.ZodType<Prisma.ImageSelect> = z.object({
    id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    url: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ImageSelect>;

export const ImageFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    url: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const ImageFindManySchema: z.ZodType<Prisma.ImageFindManyArgs> = z.object({ select: ImageFindManySelectSchema.optional(), include: z.lazy(() => ImageIncludeObjectSchema.optional()), orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ImageFindManyArgs>;

export const ImageFindManyZodSchema = z.object({ select: ImageFindManySelectSchema.optional(), include: z.lazy(() => ImageIncludeObjectSchema.optional()), orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional() }).strict();