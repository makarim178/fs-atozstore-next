import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CartItemFindManySchema } from '../findManyCartItem.schema';
import { ImageFindManySchema } from '../findManyImage.schema';
import { MetaArgsObjectSchema } from './MetaArgs.schema';
import { OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { BrandArgsObjectSchema } from './BrandArgs.schema';
import { CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { ReviewFindManySchema } from '../findManyReview.schema';
import { TagFindManySchema } from '../findManyTag.schema';
import { UnitDimensionArgsObjectSchema } from './UnitDimensionArgs.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
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
  cart_items: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
  images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  meta: z.union([z.boolean(), z.lazy(() => MetaArgsObjectSchema)]).optional(),
  order_items: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  brand: z.union([z.boolean(), z.lazy(() => BrandArgsObjectSchema)]).optional(),
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManySchema)]).optional(),
  unit_dimension: z.union([z.boolean(), z.lazy(() => UnitDimensionArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductSelectObjectSchema: z.ZodType<Prisma.ProductSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectZodSchema = makeSchema();
