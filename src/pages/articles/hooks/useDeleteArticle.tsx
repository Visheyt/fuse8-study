import { useMutation, useQueryClient } from '@tanstack/react-query';
import { articleAPI } from '../api/article-api';

export const useDeleteArticle = () => {
  const client = useQueryClient();

  const { mutate: deleteArticle } = useMutation({
    mutationFn: articleAPI.deleteArticle,
    onSuccess: () => client.invalidateQueries({ queryKey: ['articles'] }),
  });
  return deleteArticle;
};
