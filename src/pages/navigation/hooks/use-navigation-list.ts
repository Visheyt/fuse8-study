import { useEffect, useState } from 'react';
import { navigationList } from '../data/data';
import {
  generateNavigationListWithPermissions,
  checkHasUserPermission,
} from '../services/navigation-helpers';
import { NavigationType } from '../types/navigation-types';

export const useNavigationList = () => {
  const [navigationListWithPermission, setNavigationListWithPermission] =
    useState<NavigationType[]>([]);

  useEffect(() => {
    const list = generateNavigationListWithPermissions(
      navigationList,
      checkHasUserPermission
    ).filter(({ children }) => children.length);

    setNavigationListWithPermission(list);
  }, []);

  return navigationListWithPermission;
};
