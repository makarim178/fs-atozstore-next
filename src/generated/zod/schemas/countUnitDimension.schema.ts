import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { UnitDimensionOrderByWithRelationInputObjectSchema } from './objects/UnitDimensionOrderByWithRelationInput.schema';
import { UnitDimensionWhereInputObjectSchema } from './objects/UnitDimensionWhereInput.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './objects/UnitDimensionWhereUniqueInput.schema';
import { UnitDimensionCountAggregateInputObjectSchema } from './objects/UnitDimensionCountAggregateInput.schema';

export const UnitDimensionCountSchema: z.ZodType<Prisma.UnitDimensionCountArgs> = z.object({ orderBy: z.union([UnitDimensionOrderByWithRelationInputObjectSchema, UnitDimensionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UnitDimensionWhereInputObjectSchema.optional(), cursor: UnitDimensionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UnitDimensionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UnitDimensionCountArgs>;

export const UnitDimensionCountZodSchema = z.object({ orderBy: z.union([UnitDimensionOrderByWithRelationInputObjectSchema, UnitDimensionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UnitDimensionWhereInputObjectSchema.optional(), cursor: UnitDimensionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UnitDimensionCountAggregateInputObjectSchema ]).optional() }).strict();