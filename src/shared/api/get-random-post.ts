import { apiClient } from '../services/request';
import { getRandomIndex } from '../utils/get-random-index';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const getRandomPost: () => Promise<Post> = async () => {
  try {
    const response = await apiClient.get<Post[]>('/posts');
    const posts = response.data;

    return posts[getRandomIndex(posts)];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred');
  }
};
