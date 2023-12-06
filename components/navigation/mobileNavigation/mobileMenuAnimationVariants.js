export const OPEN_MENU = 'openMenu';
export const CLOSE_MENU = 'closeMenu';

export const mobileMenuAnimationVariants = {
  [OPEN_MENU]: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  [CLOSE_MENU]: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.1,
    },
  },
};
