import { navigationList } from './data/data';
import './navigation.scss';
import { NavigationItem } from './navigation-item/navigation-item';

import {
  checkHasUserPermission,
  generateNavigationListWithPermissions,
} from './utils/navigation-helpers';

export const Navigation = () => {
  const navigationListWithPermission = generateNavigationListWithPermissions(
    navigationList,
    checkHasUserPermission
  );

  // Фильтруем элементы верхнего уровня, у которых нет дочерних элементов
  const filteredNavigationList = navigationListWithPermission.filter(
    (item) => item.children.length > 0
  );

  return (
    <div className="container">
      <div className="navigation">
        {filteredNavigationList.map((item) => (
          <NavigationItem key={item.name} item={item} level={1} />
        ))}
      </div>
    </div>
  );
};
