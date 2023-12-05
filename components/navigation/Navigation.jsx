'use client';
import Link from 'next/link';
import { useCurrentNavigationPath } from '@/hooks/useCurrentNavigationPath';

const tempUlStyles = {
  display: 'inline-flex',
  listStyle: 'none',
  gap: '1rem',
};

const navigationLinks = ['home', 'journal', 'about', 'contact'];

export default function Navigation() {
  const currentPathname = useCurrentNavigationPath();

  // if mobile, return MobileNav
  // if tablet and up, return TabletLaptopDesktopNav

  return (
    <nav>
      <ul style={tempUlStyles}>
        {navigationLinks.map((link) => (
          <li key={link}>
            <Link
              href={link === 'home' ? '/' : `/${link}`}
              style={{ color: link === currentPathname ? 'black' : 'purple' }}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
