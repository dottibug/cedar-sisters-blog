'use client';
import styles from './MobileMenu.module.scss';
import { useMobileNavContext } from '@/context/useMobileNavContext';
import { AnimatePresence, motion } from 'framer-motion';
import {
  mobileMenuAnimationVariants,
  OPEN_MENU,
  CLOSE_MENU,
} from './mobileMenuAnimationVariants';
import { navigationLinks } from '../navigationLinks';
import MobileMenuLink from './MobileMenuLink';

// TODO adjust menu animation

export default function MobileMenu() {
  const { mobileNavOpen } = useMobileNavContext();

  return (
    <AnimatePresence mode="popLayout">
      {mobileNavOpen && (
        <motion.ul
          key={mobileNavOpen}
          variants={mobileMenuAnimationVariants}
          initial={{ opacity: 0 }}
          animate={OPEN_MENU}
          exit={CLOSE_MENU}
          className={styles.mobileMenu}>
          {navigationLinks.map((link) => (
            <MobileMenuLink key={link} link={link} />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
