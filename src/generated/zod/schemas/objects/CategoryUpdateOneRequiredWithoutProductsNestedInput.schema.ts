import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { CategoryCreateWithoutProductsInputObjectSchema } from './CategoryCreateWithoutProductsInput.schema';
import { CategoryUncheckedCreateWithoutProductsInputObjectSchema } from './CategoryUncheckedCreateWithoutProductsInput.schema';
import { CategoryCreateOrConnectWithoutProductsInputObjectSchema } from './CategoryCreateOrConnectWithoutProductsInput.schema';
import { CategoryUpsertWithoutProductsInputObjectSchema } from './CategoryUpsertWithoutProductsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateToOneWithWhereWithoutProductsInputObjectSchema } from './CategoryUpdateToOneWithWhereWithoutProductsInput.schema';
import { CategoryUpdateWithoutProductsInputObjectSchema } from './CategoryUpdateWithoutProductsInput.schema';
import { CategoryUncheckedUpdateWithoutProductsInputObjectSchema } from './CategoryUncheckedUpdateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutProductsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutProductsInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutProductsInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoryUpdateToOneWithWhereWithoutProductsInputObjectSchema), z.lazy(() => CategoryUpdateWithoutProductsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputObjectSchema)]).optional()
}).strict();
export const CategoryUpdateOneRequiredWithoutProductsNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput>;
export const CategoryUpdateOneRequiredWithoutProductsNestedInputObjectZodSchema = makeSchema();
