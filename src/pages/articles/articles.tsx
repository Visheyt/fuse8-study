import { routes } from '@/shared/services/routes';
import { getNavClass } from '@/shared/ui/header/header';
import { NavLink, Outlet } from 'react-router';
import styles from './articles.module.scss';

export const Articles = () => {
  return (
    <>
      <header className={styles.header}>
        <NavLink
          className={getNavClass}
          to={routes.articles.routes!.articlesList.pathName}
        >
          Articles list
        </NavLink>
        <NavLink
          className={getNavClass}
          to={routes.articles.routes!.createArticle.pathName}
        >
          Create article
        </NavLink>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
