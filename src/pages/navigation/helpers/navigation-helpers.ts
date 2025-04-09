import { NavigationItemType, NavigationType } from '../navigation-types';

export const isNavigationType = (
  item: NavigationItemType
): item is NavigationType => {
  return 'children' in item;
};

export const generateNavigationListWithPermissions = (
  navigationList: NavigationType[],
  checkPermission: (routeName: string) => boolean
): NavigationType[] => {
  const list = navigationList.map((navEl) => ({
    ...navEl,
    children: navEl.children
      .map((child) =>
        isNavigationType(child)
          ? {
              ...child,
              children:
                generateNavigationListWithPermissions(
                  [child],
                  checkPermission
                )[0]?.children ?? [],
            }
          : child
      )
      .filter(
        (child) =>
          checkPermission(child.name) ||
          (isNavigationType(child) && child.children.length > 0)
      ),
  }));

  return list.filter(({ children }) => children.length);
};
