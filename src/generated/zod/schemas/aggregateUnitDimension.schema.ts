import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { UnitDimensionOrderByWithRelationInputObjectSchema } from './objects/UnitDimensionOrderByWithRelationInput.schema';
import { UnitDimensionWhereInputObjectSchema } from './objects/UnitDimensionWhereInput.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './objects/UnitDimensionWhereUniqueInput.schema';
import { UnitDimensionCountAggregateInputObjectSchema } from './objects/UnitDimensionCountAggregateInput.schema';
import { UnitDimensionMinAggregateInputObjectSchema } from './objects/UnitDimensionMinAggregateInput.schema';
import { UnitDimensionMaxAggregateInputObjectSchema } from './objects/UnitDimensionMaxAggregateInput.schema';
import { UnitDimensionAvgAggregateInputObjectSchema } from './objects/UnitDimensionAvgAggregateInput.schema';
import { UnitDimensionSumAggregateInputObjectSchema } from './objects/UnitDimensionSumAggregateInput.schema';

export const UnitDimensionAggregateSchema: z.ZodType<Prisma.UnitDimensionAggregateArgs> = z.object({ orderBy: z.union([UnitDimensionOrderByWithRelationInputObjectSchema, UnitDimensionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UnitDimensionWhereInputObjectSchema.optional(), cursor: UnitDimensionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UnitDimensionCountAggregateInputObjectSchema ]).optional(), _min: UnitDimensionMinAggregateInputObjectSchema.optional(), _max: UnitDimensionMaxAggregateInputObjectSchema.optional(), _avg: UnitDimensionAvgAggregateInputObjectSchema.optional(), _sum: UnitDimensionSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UnitDimensionAggregateArgs>;

export const UnitDimensionAggregateZodSchema = z.object({ orderBy: z.union([UnitDimensionOrderByWithRelationInputObjectSchema, UnitDimensionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UnitDimensionWhereInputObjectSchema.optional(), cursor: UnitDimensionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UnitDimensionCountAggregateInputObjectSchema ]).optional(), _min: UnitDimensionMinAggregateInputObjectSchema.optional(), _max: UnitDimensionMaxAggregateInputObjectSchema.optional(), _avg: UnitDimensionAvgAggregateInputObjectSchema.optional(), _sum: UnitDimensionSumAggregateInputObjectSchema.optional() }).strict();