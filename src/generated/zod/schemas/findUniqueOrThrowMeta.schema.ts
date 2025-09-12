import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { MetaSelectObjectSchema } from './objects/MetaSelect.schema';
import { MetaIncludeObjectSchema } from './objects/MetaInclude.schema';
import { MetaWhereUniqueInputObjectSchema } from './objects/MetaWhereUniqueInput.schema';

export const MetaFindUniqueOrThrowSchema: z.ZodType<Prisma.MetaFindUniqueOrThrowArgs> = z.object({ select: MetaSelectObjectSchema.optional(), include: MetaIncludeObjectSchema.optional(), where: MetaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MetaFindUniqueOrThrowArgs>;

export const MetaFindUniqueOrThrowZodSchema = z.object({ select: MetaSelectObjectSchema.optional(), include: MetaIncludeObjectSchema.optional(), where: MetaWhereUniqueInputObjectSchema }).strict();