import styles from './random-post.module.css';
import { useGetRandomPost } from './api/use-get-random-post';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { Button } from '@/shared/ui/button/button';

export const RandomPost = () => {
  const { getPost, post, error, loading } = useGetRandomPost();

  return (
    <div className="container">
      <Button onClick={getPost} disabled={loading} variant={'primary'}>
        Get random post
      </Button>

      <div className={styles.content}>
        {loading && <Spinner />}

        {error && <div className={styles.error}>{error}</div>}
        {post && <div className={styles.post}>{post.title}</div>}
      </div>
    </div>
  );
};
