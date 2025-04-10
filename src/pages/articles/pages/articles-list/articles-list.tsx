import { useMutation, useQuery } from '@tanstack/react-query';
import { articleAPI } from '../../api/article-api';
import { Article } from './article/article';
import styles from './articles-list.module.scss';

export const ArticlesList = () => {
  const { data: articles, status } = useQuery({
    queryKey: ['articles'],
    queryFn: articleAPI.getArticles,
  });

  const { mutate: deleteArticle } = useMutation({
    mutationFn: articleAPI.deleteArticle,
  });

  if (status !== 'success') {
    return null;
  }

  return (
    <>
      <ul className={styles.list}>
        {articles.map((item) => (
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
