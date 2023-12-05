'use client';
import { createContext } from 'react';
import { useCycle } from 'framer-motion';

export const MobileNavContext = createContext(null);

export default function MobileNavProvider({ children }) {
  const [mobileNavOpen, toggleMobileNav] = useCycle(false, true);

  return (
    <MobileNavContext.Provider value={{ mobileNavOpen, toggleMobileNav }}>
      {children}
    </MobileNavContext.Provider>
  );
}
