import { NavLink } from 'react-router';
import styles from './header.module.css';
import { routes } from '@/shared/services/routes';

const getNavClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : '';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink className={getNavClass} to={routes.main.getLink()}>
          Main
        </NavLink>
        <NavLink className={getNavClass} to={routes.randomPost.getLink()}>
          Random-post
        </NavLink>
      </nav>
    </header>
  );
};
