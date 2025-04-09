import { routes } from '@/shared/services/routes';
import { getNavClass } from '@/shared/ui/header/header';
import { NavLink, Outlet } from 'react-router';

export const Articles = () => {
  return (
    <>
      <header>
        <NavLink
          className={getNavClass}
          to={routes.articles.routes!.articlesList.pathName}
        >
          Articles-list
        </NavLink>
        <NavLink
          className={getNavClass}
          to={routes.articles.routes!.createArticle.pathName}
        >
          Create-Article
        </NavLink>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
