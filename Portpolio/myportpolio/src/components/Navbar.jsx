const navItems = [
  { label: 'HOME', href: '#home', active: true },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'BLOG ▾', href: '#blog' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="brand-block">
        <a className="brand-logo" href="#home">
          Freaky<span className="brand-dot">.</span>
        </a>
      </div>

      <nav className="nav-links" aria-label="Primary">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`nav-link${item.active ? ' is-active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
