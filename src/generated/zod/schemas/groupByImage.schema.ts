import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageOrderByWithAggregationInputObjectSchema } from './objects/ImageOrderByWithAggregationInput.schema';
import { ImageScalarWhereWithAggregatesInputObjectSchema } from './objects/ImageScalarWhereWithAggregatesInput.schema';
import { ImageScalarFieldEnumSchema } from './enums/ImageScalarFieldEnum.schema';
import { ImageCountAggregateInputObjectSchema } from './objects/ImageCountAggregateInput.schema';
import { ImageMinAggregateInputObjectSchema } from './objects/ImageMinAggregateInput.schema';
import { ImageMaxAggregateInputObjectSchema } from './objects/ImageMaxAggregateInput.schema';

export const ImageGroupBySchema: z.ZodType<Prisma.ImageGroupByArgs> = z.object({ where: ImageWhereInputObjectSchema.optional(), orderBy: z.union([ImageOrderByWithAggregationInputObjectSchema, ImageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ImageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ImageScalarFieldEnumSchema), _count: z.union([ z.literal(true), ImageCountAggregateInputObjectSchema ]).optional(), _min: ImageMinAggregateInputObjectSchema.optional(), _max: ImageMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ImageGroupByArgs>;

export const ImageGroupByZodSchema = z.object({ where: ImageWhereInputObjectSchema.optional(), orderBy: z.union([ImageOrderByWithAggregationInputObjectSchema, ImageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ImageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ImageScalarFieldEnumSchema), _count: z.union([ z.literal(true), ImageCountAggregateInputObjectSchema ]).optional(), _min: ImageMinAggregateInputObjectSchema.optional(), _max: ImageMaxAggregateInputObjectSchema.optional() }).strict();