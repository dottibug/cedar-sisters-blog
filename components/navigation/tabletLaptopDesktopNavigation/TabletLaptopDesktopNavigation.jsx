'use client';
import styles from './TabletLaptopDesktopNavigation.module.scss';
import Link from 'next/link';
import SiteName from '../SiteName';
import { useCurrentNavigationPath } from '@/hooks/useCurrentNavigationPath';
import { navigationLinks } from '../navigationLinks';

export default function TabletLaptopDesktopNavigation() {
  const currentPathname = useCurrentNavigationPath();

  return (
    <div className={styles.navBar}>
      <SiteName />
      <ul className={styles.navMenu}>
        {navigationLinks.map((link) => (
          <li key={link} className={styles.navMenuItem}>
            <Link
              href={link === 'home' ? '/' : `/${link}`}
              className={styles.navMenuLink}
              style={{ color: link === currentPathname ? 'black' : 'purple' }}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
