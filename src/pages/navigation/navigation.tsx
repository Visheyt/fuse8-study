import styles from './navigation.module.scss';
import { NavigationItem } from './navigation-item/navigation-item';

import { useNavigationList } from './hooks/use-navigation-list';

export const Navigation = () => {
  const navigationList = useNavigationList();

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        {navigationList.map((item) => (
          <NavigationItem key={item.name} item={item} level={1} />
        ))}
      </div>
    </div>
  );
};
