import { useGetRandomPost } from './api/use-get-random-post';

export const RandomPost = () => {
  const { getPost, post, error, loading } = useGetRandomPost();
  return (
    <div>
      <button onClick={getPost} disabled={loading}>
        Get random post
      </button>
      {error ? <div>{error}</div> : ''}
      {loading ? <div>Loading...</div> : ''}
      {post ? <div>{post.title}</div> : ''}
    </div>
  );
};
