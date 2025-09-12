import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { UnitDimensionSelectObjectSchema } from './objects/UnitDimensionSelect.schema';
import { UnitDimensionIncludeObjectSchema } from './objects/UnitDimensionInclude.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './objects/UnitDimensionWhereUniqueInput.schema';

export const UnitDimensionFindUniqueSchema: z.ZodType<Prisma.UnitDimensionFindUniqueArgs> = z.object({ select: UnitDimensionSelectObjectSchema.optional(), include: UnitDimensionIncludeObjectSchema.optional(), where: UnitDimensionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UnitDimensionFindUniqueArgs>;

export const UnitDimensionFindUniqueZodSchema = z.object({ select: UnitDimensionSelectObjectSchema.optional(), include: UnitDimensionIncludeObjectSchema.optional(), where: UnitDimensionWhereUniqueInputObjectSchema }).strict();