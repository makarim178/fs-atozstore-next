import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { CategorySelectObjectSchema } from './objects/CategorySelect.schema';
import { CategoryIncludeObjectSchema } from './objects/CategoryInclude.schema';
import { CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';

export const CategoryFindUniqueSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({ select: CategorySelectObjectSchema.optional(), include: CategoryIncludeObjectSchema.optional(), where: CategoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoryFindUniqueArgs>;

export const CategoryFindUniqueZodSchema = z.object({ select: CategorySelectObjectSchema.optional(), include: CategoryIncludeObjectSchema.optional(), where: CategoryWhereUniqueInputObjectSchema }).strict();