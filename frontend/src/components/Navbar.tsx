import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'Rent', href: '/' },
  { label: 'Tech', href: '/tech' },
  { label: 'Service', href: '/service' },
  { label: 'Company', href: '/company' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y <= 10) setVisible(true);
      else if (y > lastScrollY.current) setVisible(false);
      else setVisible(true);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = [
    'fixed left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8',
    'top-4 z-50 rounded-[70px] bg-black/20 backdrop-blur-md border border-white/15 shadow-lg',
    'transition-transform duration-300 ease-out',
    visible ? 'translate-y-0' : '-translate-y-[calc(100%+2rem)]',
  ].join(' ');

  const linkClasses =
    'text-white font-semibold hover:text-amber-400 transition-colors drop-shadow-sm';

  return (
    <header className={headerClasses}>
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12 relative">
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="absolute right-0 p-2 rounded-lg text-white hover:bg-white/20 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/30">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`block py-2 ${linkClasses}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
