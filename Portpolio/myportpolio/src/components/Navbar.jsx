const navItems = [
  { label: 'HOME', href: '#home', active: true },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

const themeColors = [
  { id: 'obsidian', color: '#2dd4bf', label: 'Obsidian' },
  { id: 'cyberpunk', color: '#ff007f', label: 'Cyberpunk' },
  { id: 'mint', color: '#10b981', label: 'Mint' },
  { id: 'ocean', color: '#3b82f6', label: 'Ocean' }
];

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="brand-block">
        <a className="brand-logo" href="#home">
          Kavi<span className="brand-dot">Developper</span>
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
