import styles from './MobileNavToggleButton.module.scss';
import { motion } from 'framer-motion';
import MobileNavToggleButtonPaths from './MobileNavToggleButtonPaths';
import { useMobileNavContext } from '@/context/useMobileNavContext';

export default function MobileNavToggleButton() {
  const { mobileNavOpen, toggleMobileNav } = useMobileNavContext();

  return (
    <motion.div
      initial={false}
      animate={mobileNavOpen ? 'open' : 'closed'}
      className={styles.toggleButtonWrapper}>
      <button onClick={() => toggleMobileNav()} className={styles.toggleButton}>
        <MobileNavToggleButtonPaths />
      </button>
    </motion.div>
  );
}
