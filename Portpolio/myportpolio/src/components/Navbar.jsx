const navItems = [
  { label: 'HOME', href: '#home', active: true },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="brand-block">
        <a className="brand-logo" href="#home">
          Kavi<span className="brand-dot">Dev</span>
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
