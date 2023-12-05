import styles from './MobileNavigation.module.scss';
import SiteName from './SiteName';
import MobileNavToggleButton from './MobileNavToggleButton';
import { useMobileNavContext } from '@/context/useMobileNavContext';
import MobileMenu from './MobileMenu';

export default function MobileNavigation() {
  const { mobileNavOpen } = useMobileNavContext();

  return (
    <>
      <div className={styles.mobileNavBar}>
        <SiteName />
        <MobileNavToggleButton />
      </div>
      <MobileMenu />
    </>
  );
}
