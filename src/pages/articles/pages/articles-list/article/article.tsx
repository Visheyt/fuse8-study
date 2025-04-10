import { Article as ArticleType } from '@/pages/articles/api/types';
import styles from './article.module.scss';
import { Button } from '@/shared/ui/button/button';

type ArticleProps = Omit<ArticleType, 'id'> & {
  onDelete: () => void;
};
// todo Delete article
export const Article = ({ title, content, onDelete }: ArticleProps) => {
  return (
    <li className={styles.article}>
      <header className={styles.header}>
        <h3>{title}</h3>
      </header>

      <div className={styles.content}>
        {content.type === 'draft' ? (
          <div>
            <p>Черновик</p>
          </div>
        ) : (
          <div>
            <p>{content.description}</p>
            <p>Опубликована {content.isNew && 'Новая статья'}</p>
          </div>
        )}
        <Button variant="primary" onClick={onDelete}>
          Удалить
        </Button>
      </div>
    </li>
  );
};
