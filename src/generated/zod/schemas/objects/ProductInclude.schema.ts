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
export const ProductIncludeObjectSchema: z.ZodType<Prisma.ProductInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectZodSchema = makeSchema();
