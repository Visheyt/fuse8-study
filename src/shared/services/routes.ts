interface Route {
  getLink: () => string;
  pathName: string;
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
};
