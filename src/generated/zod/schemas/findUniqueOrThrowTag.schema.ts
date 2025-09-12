import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';

export const TagFindUniqueOrThrowSchema: z.ZodType<Prisma.TagFindUniqueOrThrowArgs> = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagFindUniqueOrThrowArgs>;

export const TagFindUniqueOrThrowZodSchema = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema }).strict();