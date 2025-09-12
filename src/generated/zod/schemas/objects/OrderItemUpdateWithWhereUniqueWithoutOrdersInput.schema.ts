import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutOrdersInputObjectSchema } from './OrderItemUpdateWithoutOrdersInput.schema';
import { OrderItemUncheckedUpdateWithoutOrdersInputObjectSchema } from './OrderItemUncheckedUpdateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrderItemUpdateWithoutOrdersInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutOrdersInputObjectSchema)])
}).strict();
export const OrderItemUpdateWithWhereUniqueWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutOrdersInput>;
export const OrderItemUpdateWithWhereUniqueWithoutOrdersInputObjectZodSchema = makeSchema();
