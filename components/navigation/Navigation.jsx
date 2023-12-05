'use client';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import { useCurrentNavigationPath } from '@/hooks/useCurrentNavigationPath';
import MobileNavigation from './MobileNavigation';
import { navigationLinks } from './navigationLinks';

const testMobile = true;

export default function Navigation() {
  const currentPathname = useCurrentNavigationPath();

  // if mobile, return MobileNav
  // if tablet and up, return TabletLaptopDesktopNav

  return (
    <nav className={styles.navigation}>
      {testMobile && <MobileNavigation />}

      {!testMobile && (
        <ul className={styles.navMenu}>
          {navigationLinks.map((link) => (
            <li key={link}>
              <Link
                href={link === 'home' ? '/' : `/${link}`}
                className={styles.navMenuLink}
                style={{ color: link === currentPathname ? 'black' : 'purple' }}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
