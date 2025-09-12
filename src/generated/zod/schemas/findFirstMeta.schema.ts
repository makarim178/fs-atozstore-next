import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { MetaIncludeObjectSchema } from './objects/MetaInclude.schema';
import { MetaOrderByWithRelationInputObjectSchema } from './objects/MetaOrderByWithRelationInput.schema';
import { MetaWhereInputObjectSchema } from './objects/MetaWhereInput.schema';
import { MetaWhereUniqueInputObjectSchema } from './objects/MetaWhereUniqueInput.schema';
import { MetaScalarFieldEnumSchema } from './enums/MetaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MetaFindFirstSelectSchema: z.ZodType<Prisma.MetaSelect> = z.object({
    id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    barcode: z.boolean().optional(),
    qrcode: z.boolean().optional(),
    product_id: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MetaSelect>;

export const MetaFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    barcode: z.boolean().optional(),
    qrcode: z.boolean().optional(),
    product_id: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const MetaFindFirstSchema: z.ZodType<Prisma.MetaFindFirstArgs> = z.object({ select: MetaFindFirstSelectSchema.optional(), include: z.lazy(() => MetaIncludeObjectSchema.optional()), orderBy: z.union([MetaOrderByWithRelationInputObjectSchema, MetaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetaWhereInputObjectSchema.optional(), cursor: MetaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MetaScalarFieldEnumSchema, MetaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MetaFindFirstArgs>;

export const MetaFindFirstZodSchema = z.object({ select: MetaFindFirstSelectSchema.optional(), include: z.lazy(() => MetaIncludeObjectSchema.optional()), orderBy: z.union([MetaOrderByWithRelationInputObjectSchema, MetaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetaWhereInputObjectSchema.optional(), cursor: MetaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MetaScalarFieldEnumSchema, MetaScalarFieldEnumSchema.array()]).optional() }).strict();