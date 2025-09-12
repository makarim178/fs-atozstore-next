import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagOrderByWithRelationInputObjectSchema } from './objects/TagOrderByWithRelationInput.schema';
import { TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagScalarFieldEnumSchema } from './enums/TagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagFindManySelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    product_id: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TagSelect>;

export const TagFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    product_id: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const TagFindManySchema: z.ZodType<Prisma.TagFindManyArgs> = z.object({ select: TagFindManySelectSchema.optional(), include: z.lazy(() => TagIncludeObjectSchema.optional()), orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagFindManyArgs>;

export const TagFindManyZodSchema = z.object({ select: TagFindManySelectSchema.optional(), include: z.lazy(() => TagIncludeObjectSchema.optional()), orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional() }).strict();