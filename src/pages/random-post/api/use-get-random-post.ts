import { getRandomPost } from '@/shared/api/get-random-post';
import { Post } from '@/shared/interfaces/api-interface';
import { useState, useCallback } from 'react';

export const useGetRandomPost = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getPost = useCallback(async () => {
    setPost(null);
    setLoading(true);
    setError('');

    try {
      const data = await getRandomPost();
      setPost(data);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  return { getPost, post, loading, error };
};
