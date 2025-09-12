import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CartItemOrderByRelationAggregateInputObjectSchema } from './CartItemOrderByRelationAggregateInput.schema';
import { ImageOrderByRelationAggregateInputObjectSchema } from './ImageOrderByRelationAggregateInput.schema';
import { MetaOrderByWithRelationInputObjectSchema } from './MetaOrderByWithRelationInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';
import { BrandOrderByWithRelationInputObjectSchema } from './BrandOrderByWithRelationInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { TagOrderByRelationAggregateInputObjectSchema } from './TagOrderByRelationAggregateInput.schema';
import { UnitDimensionOrderByWithRelationInputObjectSchema } from './UnitDimensionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  sku: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category_id: SortOrderSchema.optional(),
  brand_id: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discount_percentage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rating: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stock: SortOrderSchema.optional(),
  warranty_information: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  shipping_information: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  return_policy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minimum_order_quantity: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isAvailable: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  thumbnail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cart_items: z.lazy(() => CartItemOrderByRelationAggregateInputObjectSchema).optional(),
  images: z.lazy(() => ImageOrderByRelationAggregateInputObjectSchema).optional(),
  meta: z.lazy(() => MetaOrderByWithRelationInputObjectSchema).optional(),
  order_items: z.lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema).optional(),
  brand: z.lazy(() => BrandOrderByWithRelationInputObjectSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputObjectSchema).optional(),
  unit_dimension: z.lazy(() => UnitDimensionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductOrderByWithRelationInput>;
export const ProductOrderByWithRelationInputObjectZodSchema = makeSchema();
