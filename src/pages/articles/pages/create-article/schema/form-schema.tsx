import { z } from 'zod';

export const createFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Название обязательно')
    .max(100, 'Слишком длинное название'),
  content: z.discriminatedUnion('type', [
    z.object({ type: z.literal('draft') }),
    z.object({
      type: z.literal('published'),
      description: z
        .string()
        .min(10, 'Минимум 10 символов')
        .max(100, 'Слишком длинное описание'),
      isNew: z.boolean(),
    }),
  ]),
});

export type CreateFormValues = z.infer<typeof createFormSchema>;
