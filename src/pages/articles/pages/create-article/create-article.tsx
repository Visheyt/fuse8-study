import { Button } from '@/shared/ui/button/button';

import styles from './create-article.module.scss';

import { CreateFormValues } from './schema/form-schema';
import { useAddArticle } from '../../hooks/useAddArticle';
import { useArticleForm } from '../../hooks/useArticleForm';

export const CreateArticle = () => {
  const { register, handleSubmit, contentType } = useArticleForm();

  const { status, addArticle } = useAddArticle();

  const submitHandler = handleSubmit((data: CreateFormValues) => {
    addArticle(data);
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
