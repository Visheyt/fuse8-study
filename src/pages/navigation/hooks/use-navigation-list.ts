import { useEffect, useState } from 'react';
import { navigationList, USER_READ_PERMISSIONS } from '../data';
import { generateNavigationListWithPermissions } from '../helpers/navigation-helpers';
import { NavigationType } from '../navigation-types';

const checkHasUserPermission = (routeName: string) => {
  return USER_READ_PERMISSIONS.includes(routeName);
};

export const useNavigationList = () => {
  const [navigationListWithPermission, setNavigationListWithPermission] =
    useState<NavigationType[]>([]);

  useEffect(() => {
    const list = generateNavigationListWithPermissions(
      navigationList,
      checkHasUserPermission
    );

    setNavigationListWithPermission(list);
  }, []);

  return navigationListWithPermission;
};
