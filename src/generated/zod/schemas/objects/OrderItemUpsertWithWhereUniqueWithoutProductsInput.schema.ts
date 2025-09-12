import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutProductsInputObjectSchema } from './OrderItemUpdateWithoutProductsInput.schema';
import { OrderItemUncheckedUpdateWithoutProductsInputObjectSchema } from './OrderItemUncheckedUpdateWithoutProductsInput.schema';
import { OrderItemCreateWithoutProductsInputObjectSchema } from './OrderItemCreateWithoutProductsInput.schema';
import { OrderItemUncheckedCreateWithoutProductsInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrderItemUpdateWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutProductsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductsInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductsInputObjectSchema)])
}).strict();
export const OrderItemUpsertWithWhereUniqueWithoutProductsInputObjectSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutProductsInput>;
export const OrderItemUpsertWithWhereUniqueWithoutProductsInputObjectZodSchema = makeSchema();
