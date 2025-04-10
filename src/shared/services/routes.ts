interface Route {
  getLink: () => string;
  pathName: string;
  routes?: Record<string, Route>;
}
export const routes: Record<string, Route> = {
  main: {
    getLink: () => '/',
    pathName: '/',
  },
  randomPost: {
    getLink: () => 'random-post',
    pathName: '/random-post',
  },
  landing: {
    getLink: () => 'landing',
    pathName: '/landing',
  },
  navigation: {
    getLink: () => 'navigation',
    pathName: '/navigation',
  },
  articles: {
    getLink: () => 'articles',
    pathName: '/articles',
    routes: {
      articlesList: {
        getLink: () => '/articles/articles-list',
        pathName: '/articles/articles-list',
      },
      createArticle: {
        getLink: () => '/articles/create-article',
        pathName: '/articles/create-article',
      },
    },
  },
};
