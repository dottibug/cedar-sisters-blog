import styles from './SiteName.module.scss';
import Link from 'next/link';

export default function SiteName() {
  return (
    <Link href="/" className={styles.siteNameLink}>
      <h1 className={styles.siteName}>Cedar Sisters</h1>
    </Link>
  );
}
