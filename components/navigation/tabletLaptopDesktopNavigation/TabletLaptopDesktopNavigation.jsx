'use client';
import styles from './TabletLaptopDesktopNavigation.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import SiteName from '../SiteName';
import { useCurrentNavigationPath } from '@/hooks/useCurrentNavigationPath';
import { navigationLinks } from '../navigationLinks';

export default function TabletLaptopDesktopNavigation() {
  const currentPathname = useCurrentNavigationPath();
  const [hoveredNavLink, setHoveredNavLink] = useState(null);

  const handleHoverNavLink = (link) => setHoveredNavLink(link);
  const handleBlurNavLink = () => setHoveredNavLink(null);
  console.log('HOVERED LINK: ', hoveredNavLink);

  return (
    <div className={styles.navBar}>
      <SiteName />
      <ul className={styles.navMenu}>
        {navigationLinks.map((link) => (
          <li
            key={link}
            className={styles.navMenuItem}
            onPointerEnter={() => handleHoverNavLink(link)}
            onPointerLeave={handleBlurNavLink}>
            <Link
              href={link === 'home' ? '/' : `/${link}`}
              className={
                link === currentPathname
                  ? `${styles.navMenuLink} ${styles.active}`
                  : styles.navMenuLink
              }>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
