import { usePathname } from 'next/navigation';

/**
 * Custom hook to get the current pathname.
 * If the pathname is '/', it returns 'home'.
 * If the pathname is '/journal' or '/journal/*, it returns 'journal'.
 * Otherwise, the pathname with '/' sliced out.
 */
export const useCurrentNavigationPath = () => {
  const pathname = usePathname();

  if (pathname === '/') return 'home';

  if (pathname.split('/').includes('journal')) return 'journal';

  return pathname.slice(1);
};
