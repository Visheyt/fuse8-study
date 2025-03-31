import { navigationList } from './data/data';
import styles from './navigation.module.scss';
import { NavigationItem } from './navigation-item/navigation-item';

import {
  checkHasUserPermission,
  generateNavigationListWithPermissions,
} from './services/navigation-helpers';

export const Navigation = () => {
  const visibleNavigationList = generateNavigationListWithPermissions(
    navigationList,
    checkHasUserPermission
  ).filter(({ children }) => children.length);

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        {visibleNavigationList.map((item) => (
          <NavigationItem key={item.name} item={item} level={1} />
        ))}
      </div>
    </div>
  );
};
