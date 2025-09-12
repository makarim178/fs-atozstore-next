import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductCountOrderByAggregateInputObjectSchema } from './ProductCountOrderByAggregateInput.schema';
import { ProductAvgOrderByAggregateInputObjectSchema } from './ProductAvgOrderByAggregateInput.schema';
import { ProductMaxOrderByAggregateInputObjectSchema } from './ProductMaxOrderByAggregateInput.schema';
import { ProductMinOrderByAggregateInputObjectSchema } from './ProductMinOrderByAggregateInput.schema';
import { ProductSumOrderByAggregateInputObjectSchema } from './ProductSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => ProductCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductOrderByWithAggregationInput>;
export const ProductOrderByWithAggregationInputObjectZodSchema = makeSchema();
