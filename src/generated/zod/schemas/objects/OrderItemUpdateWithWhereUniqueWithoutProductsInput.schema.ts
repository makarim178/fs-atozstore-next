import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutProductsInputObjectSchema } from './OrderItemUpdateWithoutProductsInput.schema';
import { OrderItemUncheckedUpdateWithoutProductsInputObjectSchema } from './OrderItemUncheckedUpdateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrderItemUpdateWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutProductsInputObjectSchema)])
}).strict();
export const OrderItemUpdateWithWhereUniqueWithoutProductsInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductsInput>;
export const OrderItemUpdateWithWhereUniqueWithoutProductsInputObjectZodSchema = makeSchema();
