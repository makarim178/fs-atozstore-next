import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema } from './OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyWithoutOrdersInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrderItemUpdateManyMutationInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrdersInputObjectSchema)])
}).strict();
export const OrderItemUpdateManyWithWhereWithoutOrdersInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutOrdersInput>;
export const OrderItemUpdateManyWithWhereWithoutOrdersInputObjectZodSchema = makeSchema();
