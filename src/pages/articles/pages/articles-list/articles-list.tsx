import { useMutation, useQuery } from '@tanstack/react-query';
import { articleAPI } from '../../api/article-api';
import { useNavigate } from 'react-router';
import { routes } from '@/shared/services/routes';

export const ArticlesList = () => {
  const { data: articles, status } = useQuery({
    queryKey: ['fetch-articles'],
    queryFn: articleAPI.getArticles,
  });
  const navigate = useNavigate();
  const { mutate: deleteArticle } = useMutation({
    mutationFn: articleAPI.deleteArticle,
  });

  if (status !== 'success') {
    return null;
  }

  return (
    <>
      <button
        onClick={() =>
          navigate(routes.articles.routes!.createArticle.getLink())
        }
      >
        Create Article
      </button>
      <ul>
        {articles.map((item) => (
          <li
            key={item.id}
            style={{ border: '1px solid #ccc', padding: '12px' }}
          >
            <button type="button" onClick={() => deleteArticle(item.id)}>
              Удалить
            </button>
            <p>id: {item.id}</p>
            <p>заголовок: {item.title}</p>
            <p>тип: {item.content.type}</p>
            <div>
              {item.content.type === 'draft' ? (
                <div>
                  <p>Черновик</p>
                </div>
              ) : (
                <div>
                  <p>Опубликована {item.content.isNew && 'Новая статья'}</p>
                  <p>{item.content.description}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
