import { articleAPI } from '@/pages/articles/api/article-api';
import { Article } from '@/pages/articles/api/types';
import { routes } from '@/shared/services/routes';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export const useAddArticle = () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  const { status, mutate: addArticle } = useMutation({
    mutationFn: articleAPI.createArticle,
    onSuccess: (newArticle) => {
      navigate(routes.articles.routes!.articlesList.getLink());
      client.setQueryData<Article[]>(['articles'], (oldData) => {
        return [...(oldData || []), newArticle];
      });
    },
  });
  return {
    status,
    addArticle,
  };
};
