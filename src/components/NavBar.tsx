import { Link } from 'gatsby';
import { Cancel, Menu } from 'iconoir-react';
import React, { useState, useEffect } from 'react';
import Button from './Button';

type NavBarElement = React.ElementRef<'header'>;
type NavBarProps = React.ComponentPropsWithoutRef<'header'>;

const NAV_LINKS = [
  { to: '/about', value: 'About us' },
  { to: '/projects', value: 'Projects' },
  { to: '/events', value: 'Events' },
];

const NavBar = React.forwardRef<NavBarElement, NavBarProps>(({ ...restProps }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobileMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header {...restProps}>
      <nav className='flex max-w-5xl mx-auto items-center justify-between flex-wrap p-8'>
        <div className='flex items-center flex-shrink-0'>
          <Link to='/' className='text-xl font-bold'>
            BUGS
          </Link>
        </div>
        <div className='block md:hidden'>
          <button className='flex w-10 h-10 items-center justify-center' onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <Cancel /> : <Menu />}
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'h-44' : 'h-0'
          } w-full block truncate flex-grow mt-2 transition-height duration-100 md:mt-0 md:flex md:items-center md:w-auto md:h-auto`}
        >
          <div className='md:flex md:flex-row md:flex-grow md:space-x-12 md:justify-center'>
            {NAV_LINKS.map(({ to, value }) => (
              <Link
                key={value}
                to={to}
                className='text-zinc-800 block mb-4 md:mb-0 md:inline-block'
              >
                {value}
              </Link>
            ))}
          </div>
          <div>
            <a href='https://discord.gg/75jgtXy7rz'>
              <Button variant='primary' className='px-6'>
                Join
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
