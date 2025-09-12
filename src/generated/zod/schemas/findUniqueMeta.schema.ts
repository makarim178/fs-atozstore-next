import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { MetaSelectObjectSchema } from './objects/MetaSelect.schema';
import { MetaIncludeObjectSchema } from './objects/MetaInclude.schema';
import { MetaWhereUniqueInputObjectSchema } from './objects/MetaWhereUniqueInput.schema';

export const MetaFindUniqueSchema: z.ZodType<Prisma.MetaFindUniqueArgs> = z.object({ select: MetaSelectObjectSchema.optional(), include: MetaIncludeObjectSchema.optional(), where: MetaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MetaFindUniqueArgs>;

export const MetaFindUniqueZodSchema = z.object({ select: MetaSelectObjectSchema.optional(), include: MetaIncludeObjectSchema.optional(), where: MetaWhereUniqueInputObjectSchema }).strict();