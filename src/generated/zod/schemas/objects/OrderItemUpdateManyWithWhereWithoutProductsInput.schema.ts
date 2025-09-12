import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema } from './OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyWithoutProductsInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrderItemUpdateManyMutationInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductsInputObjectSchema)])
}).strict();
export const OrderItemUpdateManyWithWhereWithoutProductsInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductsInput>;
export const OrderItemUpdateManyWithWhereWithoutProductsInputObjectZodSchema = makeSchema();
