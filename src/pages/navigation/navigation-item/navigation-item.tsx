import { NavigationItemType } from '../types/navigation-types';
import { isNavigationType } from '../utils/navigation-helpers';
import styles from './navigation-item.module.scss';

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
        <a href={item.getLink()}>{item.text}</a>
      )}
    </div>
  );
};
