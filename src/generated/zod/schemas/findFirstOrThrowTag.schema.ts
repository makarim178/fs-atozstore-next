import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagOrderByWithRelationInputObjectSchema } from './objects/TagOrderByWithRelationInput.schema';
import { TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagScalarFieldEnumSchema } from './enums/TagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    product_id: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TagSelect>;

export const TagFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    product_id: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const TagFindFirstOrThrowSchema: z.ZodType<Prisma.TagFindFirstOrThrowArgs> = z.object({ select: TagFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TagIncludeObjectSchema.optional()), orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagFindFirstOrThrowArgs>;

export const TagFindFirstOrThrowZodSchema = z.object({ select: TagFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TagIncludeObjectSchema.optional()), orderBy: z.union([TagOrderByWithRelationInputObjectSchema, TagOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagWhereInputObjectSchema.optional(), cursor: TagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional() }).strict();