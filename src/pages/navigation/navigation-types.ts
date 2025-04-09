type BaseNavigation = {
  name: string;
  text: string;
};

export type NavigationRoute = BaseNavigation & {
  pathname: string;
  getLink: () => string;
};

export type NavigationType = BaseNavigation & {
  children: NavigationItemType[];
};

export type NavigationItemType = NavigationType | NavigationRoute;
