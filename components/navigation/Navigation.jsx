'use client';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import { useCurrentNavigationPath } from '@/hooks/useCurrentNavigationPath';
import MobileNavigation from './mobileNavigation/MobileNavigation';
import { navigationLinks } from './navigationLinks';
import { useMediaContext } from '@/context/useMediaContext';
import { MOBILE } from '@/context/MediaProvider';
import TabletLaptopDesktopNavigation from './tabletLaptopDesktopNavigation/TabletLaptopDesktopNavigation';

const testMobile = true;

export default function Navigation() {
  const currentPathname = useCurrentNavigationPath();
  const { media } = useMediaContext();

  console.log('MEDIA: ', media);

  return (
    <nav className={styles.navigation}>
      {media === MOBILE ? <MobileNavigation /> : <TabletLaptopDesktopNavigation />}
    </nav>
  );
}
