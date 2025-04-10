import { articleAPI } from '@/pages/articles/api/article-api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useArticle = () => {
  const client = useQueryClient();
  const {
    data: articles,

    isSuccess,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: articleAPI.getArticles,
  });

  const { mutate: deleteArticle } = useMutation({
    mutationFn: articleAPI.deleteArticle,
    onSuccess: () => client.invalidateQueries({ queryKey: ['articles'] }),
  });

  return {
    deleteArticle,
    articles,
    isSuccess,
  };
};
