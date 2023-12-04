import Navigation from '../navigation/Navigation';

// use same breaks as space
// for mobile, render mobile nav
// else other nav

const tempHeaderStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export default function Header({ children }) {
  return (
    <header style={tempHeaderStyles}>
      <h1>Cedar Sisters</h1>
      <Navigation />
    </header>
  );
}
