import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductScalarFieldEnumSchema } from './enums/ProductScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductFindFirstSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
    id: z.boolean().optional(),
    sku: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    category_id: z.boolean().optional(),
    brand_id: z.boolean().optional(),
    price: z.boolean().optional(),
    discount_percentage: z.boolean().optional(),
    rating: z.boolean().optional(),
    stock: z.boolean().optional(),
    warranty_information: z.boolean().optional(),
    shipping_information: z.boolean().optional(),
    return_policy: z.boolean().optional(),
    minimum_order_quantity: z.boolean().optional(),
    isAvailable: z.boolean().optional(),
    thumbnail: z.boolean().optional(),
    created_at: z.boolean().optional(),
    cart_items: z.boolean().optional(),
    images: z.boolean().optional(),
    meta: z.boolean().optional(),
    order_items: z.boolean().optional(),
    brand: z.boolean().optional(),
    category: z.boolean().optional(),
    reviews: z.boolean().optional(),
    tags: z.boolean().optional(),
    unit_dimension: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductSelect>;

export const ProductFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    sku: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    category_id: z.boolean().optional(),
    brand_id: z.boolean().optional(),
    price: z.boolean().optional(),
    discount_percentage: z.boolean().optional(),
    rating: z.boolean().optional(),
    stock: z.boolean().optional(),
    warranty_information: z.boolean().optional(),
    shipping_information: z.boolean().optional(),
    return_policy: z.boolean().optional(),
    minimum_order_quantity: z.boolean().optional(),
    isAvailable: z.boolean().optional(),
    thumbnail: z.boolean().optional(),
    created_at: z.boolean().optional(),
    cart_items: z.boolean().optional(),
    images: z.boolean().optional(),
    meta: z.boolean().optional(),
    order_items: z.boolean().optional(),
    brand: z.boolean().optional(),
    category: z.boolean().optional(),
    reviews: z.boolean().optional(),
    tags: z.boolean().optional(),
    unit_dimension: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProductFindFirstSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({ select: ProductFindFirstSelectSchema.optional(), include: z.lazy(() => ProductIncludeObjectSchema.optional()), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductFindFirstArgs>;

export const ProductFindFirstZodSchema = z.object({ select: ProductFindFirstSelectSchema.optional(), include: z.lazy(() => ProductIncludeObjectSchema.optional()), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict();