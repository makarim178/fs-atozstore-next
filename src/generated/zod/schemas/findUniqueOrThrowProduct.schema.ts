import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ProductSelectObjectSchema } from './objects/ProductSelect.schema';
import { ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';

export const ProductFindUniqueOrThrowSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({ select: ProductSelectObjectSchema.optional(), include: ProductIncludeObjectSchema.optional(), where: ProductWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductFindUniqueOrThrowArgs>;

export const ProductFindUniqueOrThrowZodSchema = z.object({ select: ProductSelectObjectSchema.optional(), include: ProductIncludeObjectSchema.optional(), where: ProductWhereUniqueInputObjectSchema }).strict();