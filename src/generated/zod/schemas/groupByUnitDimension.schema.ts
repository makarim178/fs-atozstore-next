import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { UnitDimensionWhereInputObjectSchema } from './objects/UnitDimensionWhereInput.schema';
import { UnitDimensionOrderByWithAggregationInputObjectSchema } from './objects/UnitDimensionOrderByWithAggregationInput.schema';
import { UnitDimensionScalarWhereWithAggregatesInputObjectSchema } from './objects/UnitDimensionScalarWhereWithAggregatesInput.schema';
import { UnitDimensionScalarFieldEnumSchema } from './enums/UnitDimensionScalarFieldEnum.schema';
import { UnitDimensionCountAggregateInputObjectSchema } from './objects/UnitDimensionCountAggregateInput.schema';
import { UnitDimensionMinAggregateInputObjectSchema } from './objects/UnitDimensionMinAggregateInput.schema';
import { UnitDimensionMaxAggregateInputObjectSchema } from './objects/UnitDimensionMaxAggregateInput.schema';
import { UnitDimensionAvgAggregateInputObjectSchema } from './objects/UnitDimensionAvgAggregateInput.schema';
import { UnitDimensionSumAggregateInputObjectSchema } from './objects/UnitDimensionSumAggregateInput.schema';

export const UnitDimensionGroupBySchema: z.ZodType<Prisma.UnitDimensionGroupByArgs> = z.object({ where: UnitDimensionWhereInputObjectSchema.optional(), orderBy: z.union([UnitDimensionOrderByWithAggregationInputObjectSchema, UnitDimensionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UnitDimensionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UnitDimensionScalarFieldEnumSchema), _count: z.union([ z.literal(true), UnitDimensionCountAggregateInputObjectSchema ]).optional(), _min: UnitDimensionMinAggregateInputObjectSchema.optional(), _max: UnitDimensionMaxAggregateInputObjectSchema.optional(), _avg: UnitDimensionAvgAggregateInputObjectSchema.optional(), _sum: UnitDimensionSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UnitDimensionGroupByArgs>;

export const UnitDimensionGroupByZodSchema = z.object({ where: UnitDimensionWhereInputObjectSchema.optional(), orderBy: z.union([UnitDimensionOrderByWithAggregationInputObjectSchema, UnitDimensionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UnitDimensionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UnitDimensionScalarFieldEnumSchema), _count: z.union([ z.literal(true), UnitDimensionCountAggregateInputObjectSchema ]).optional(), _min: UnitDimensionMinAggregateInputObjectSchema.optional(), _max: UnitDimensionMaxAggregateInputObjectSchema.optional(), _avg: UnitDimensionAvgAggregateInputObjectSchema.optional(), _sum: UnitDimensionSumAggregateInputObjectSchema.optional() }).strict();