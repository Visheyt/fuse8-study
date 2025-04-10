import { useMutation, useQueryClient } from '@tanstack/react-query';
import { articleAPI } from '../../api/article-api';
import { useNavigate } from 'react-router';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { routes } from '@/shared/services/routes';
import { Button } from '@/shared/ui/button/button';

import styles from './create-article.module.scss';
import { Article } from '../../api/types';

const createFormSchema = z.object({
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

type CreateFormValues = z.infer<typeof createFormSchema>;

export const CreateArticle = () => {
  const { register, handleSubmit, control } = useForm<CreateFormValues>({
    resolver: zodResolver(createFormSchema),
  });

  const navigate = useNavigate();

  const client = useQueryClient();

  const { status, mutate } = useMutation({
    mutationFn: articleAPI.createArticle,
    onSuccess: (newArticle) => {
      navigate(routes.articles.routes!.articlesList.getLink());
      client.setQueryData<Article[]>(['articles'], (oldData) => {
        return [...(oldData || []), newArticle];
      });
    },
  });

  const submitHandler = handleSubmit((data: CreateFormValues) => {
    mutate(data);
  });
  const contentType = useWatch({
    control,
    name: 'content.type',
  });
  return (
    <div>
      <h1>Создать статью</h1>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.formField}>
          <label>Введите Заголовок:</label>
          <input type="text" {...register('title')} placeholder="Заголовок" />
        </div>

        {contentType === 'published' && (
          <>
            <div className={styles.formField}>
              <label> Введите описание:</label>
              <textarea
                {...register('content.description')}
                placeholder="Описание"
              />
            </div>

            <label>
              <input type="checkbox" {...register('content.isNew')} />
              Новая статья
            </label>
          </>
        )}
        <select {...register('content.type')}>
          <option value="draft">Черновик</option>
          <option value="published">Опубликовано</option>
        </select>
        <Button
          variant="primary"
          type="submit"
          disabled={status === 'pending'}
          style={{ marginTop: '8px' }}
        >
          {status === 'pending' ? 'Создание' : 'Создать'}
        </Button>
      </form>
    </div>
  );
};
