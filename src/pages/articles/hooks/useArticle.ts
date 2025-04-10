import { articleAPI } from '@/pages/articles/api/article-api';
import { useQuery } from '@tanstack/react-query';

export const useArticle = () => {
  const { data: articles, isSuccess } = useQuery({
    queryKey: ['articles'],
    queryFn: articleAPI.getArticles,
  });

  return {
    articles,
    isSuccess,
  };
};
