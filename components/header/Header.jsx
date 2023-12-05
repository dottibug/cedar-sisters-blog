'use client';
import Navigation from '../navigation/Navigation';

// use same breaks as space
// for mobile, render mobile nav
// else other nav

const tempHeaderStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export default function Header() {
  return (
    <header style={tempHeaderStyles}>
      <Navigation />
    </header>
  );
}
