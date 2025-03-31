import { USER_READ_PERMISSIONS } from '../data/data';
import { NavigationItemType, NavigationType } from '../types/navigation-types';

export const isNavigationType = (
  item: NavigationItemType
): item is NavigationType => {
  return 'children' in item;
};

export const checkHasUserPermission = (routeName: string) => {
  return USER_READ_PERMISSIONS.includes(routeName);
};

export const generateNavigationListWithPermissions = (
  navigationList: NavigationType[],
  checkPermission: (routeName: string) => boolean
): NavigationType[] => {
  return navigationList.map((navEl) => ({
    ...navEl,
    children: navEl.children
      .map((child) =>
        isNavigationType(child)
          ? {
              ...child,
              children: generateNavigationListWithPermissions(
                [child],
                checkPermission
              )[0].children,
            }
          : child
      )
      .filter(
        (child) =>
          checkPermission(child.name) ||
          (isNavigationType(child) && child.children.length > 0)
      ),
  }));
};
