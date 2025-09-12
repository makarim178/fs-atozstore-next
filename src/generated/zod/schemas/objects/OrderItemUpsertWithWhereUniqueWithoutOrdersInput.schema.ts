import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutOrdersInputObjectSchema } from './OrderItemUpdateWithoutOrdersInput.schema';
import { OrderItemUncheckedUpdateWithoutOrdersInputObjectSchema } from './OrderItemUncheckedUpdateWithoutOrdersInput.schema';
import { OrderItemCreateWithoutOrdersInputObjectSchema } from './OrderItemCreateWithoutOrdersInput.schema';
import { OrderItemUncheckedCreateWithoutOrdersInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrderItemUpdateWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderItemCreateWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const OrderItemUpsertWithWhereUniqueWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutOrdersInput>;
export const OrderItemUpsertWithWhereUniqueWithoutOrdersInputObjectZodSchema = makeSchema();
