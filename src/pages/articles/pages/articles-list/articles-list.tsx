import { Article } from './article/article';
import styles from './articles-list.module.scss';
import { useArticle } from '../../hooks/useArticle';

export const ArticlesList = () => {
  const { articles, deleteArticle, isSuccess } = useArticle();

  if (!isSuccess) {
    return null;
  }

  return (
    <>
      <ul className={styles.list}>
        {articles?.map((item) => (
          <Article
            {...item}
            key={item.id}
            onDelete={() => deleteArticle(item.id)}
          />
        ))}
      </ul>
    </>
  );
};
