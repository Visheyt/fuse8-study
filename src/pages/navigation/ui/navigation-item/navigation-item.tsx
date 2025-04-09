import { NavigationItemType } from '../../navigation-types';
import { isNavigationType } from '../../helpers/navigation-helpers';
import styles from './navigation-item.module.scss';
import { Link } from 'react-router';

export const NavigationItem = ({
  item,
  level,
}: {
  item: NavigationItemType;
  level: number;
}) => {
  return (
    <div className={styles[`level${level}`]}>
      {isNavigationType(item) ? (
        <>
          {item.text}
          {item.children.length > 0 && (
            <div>
              {item.children.map((child) => (
                <NavigationItem
                  key={child.name}
                  item={child}
                  level={level + 1}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <Link to={item.getLink()}>{item.text}</Link>
      )}
    </div>
  );
};
