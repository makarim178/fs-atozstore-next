import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { TagSelectObjectSchema } from './objects/TagSelect.schema';
import { TagIncludeObjectSchema } from './objects/TagInclude.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';

export const TagFindUniqueSchema: z.ZodType<Prisma.TagFindUniqueArgs> = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagFindUniqueArgs>;

export const TagFindUniqueZodSchema = z.object({ select: TagSelectObjectSchema.optional(), include: TagIncludeObjectSchema.optional(), where: TagWhereUniqueInputObjectSchema }).strict();