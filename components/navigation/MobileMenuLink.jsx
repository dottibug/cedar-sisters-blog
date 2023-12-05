import styles from './MobileMenuLink.module.scss';
import Link from 'next/link';
import { useMobileNavContext } from '@/context/useMobileNavContext';

export default function MobileMenuLink({ link }) {
  const { toggleMobileNav } = useMobileNavContext();
  const handleClickMobileMenuItem = () => toggleMobileNav();

  return (
    <li className={styles.mobileMenuItem} onClick={handleClickMobileMenuItem}>
      <Link
        href={link === 'home' ? '/' : `/${link}`}
        className={styles.mobileMenuItemLink}>
        {link}
      </Link>
    </li>
  );
}
