import styles from './MobileNavigation.module.scss';
import SiteName from '../SiteName';
import MobileNavToggleButton from './MobileNavToggleButton';
import MobileMenu from './MobileMenu';

export default function MobileNavigation() {
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
