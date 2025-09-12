import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { UnitDimensionIncludeObjectSchema } from './objects/UnitDimensionInclude.schema';
import { UnitDimensionOrderByWithRelationInputObjectSchema } from './objects/UnitDimensionOrderByWithRelationInput.schema';
import { UnitDimensionWhereInputObjectSchema } from './objects/UnitDimensionWhereInput.schema';
import { UnitDimensionWhereUniqueInputObjectSchema } from './objects/UnitDimensionWhereUniqueInput.schema';
import { UnitDimensionScalarFieldEnumSchema } from './enums/UnitDimensionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UnitDimensionFindManySelectSchema: z.ZodType<Prisma.UnitDimensionSelect> = z.object({
    id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    weight: z.boolean().optional(),
    unit: z.boolean().optional(),
    height: z.boolean().optional(),
    width: z.boolean().optional(),
    depth: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UnitDimensionSelect>;

export const UnitDimensionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    weight: z.boolean().optional(),
    unit: z.boolean().optional(),
    height: z.boolean().optional(),
    width: z.boolean().optional(),
    depth: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const UnitDimensionFindManySchema: z.ZodType<Prisma.UnitDimensionFindManyArgs> = z.object({ select: UnitDimensionFindManySelectSchema.optional(), include: z.lazy(() => UnitDimensionIncludeObjectSchema.optional()), orderBy: z.union([UnitDimensionOrderByWithRelationInputObjectSchema, UnitDimensionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UnitDimensionWhereInputObjectSchema.optional(), cursor: UnitDimensionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UnitDimensionScalarFieldEnumSchema, UnitDimensionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UnitDimensionFindManyArgs>;

export const UnitDimensionFindManyZodSchema = z.object({ select: UnitDimensionFindManySelectSchema.optional(), include: z.lazy(() => UnitDimensionIncludeObjectSchema.optional()), orderBy: z.union([UnitDimensionOrderByWithRelationInputObjectSchema, UnitDimensionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UnitDimensionWhereInputObjectSchema.optional(), cursor: UnitDimensionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UnitDimensionScalarFieldEnumSchema, UnitDimensionScalarFieldEnumSchema.array()]).optional() }).strict();