
const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  
];

const socials = [
  { label: 'in', url: 'https://www.linkedin.com/in/kavi-arasan-73680827b' },
  { label: 'gh', url: 'https://github.com/Ekaviyarasan/kavi-mern-assienment' },
  { label: 'mail', url: 'https://mail.google.com/mail/?view=cm&to=kaviarasan7778@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">© 2026 Kaviyarasan | MERN Stack Developper</p>

      <div className="footer-links">
        {footerLinks.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </div>

      <div className="footer-socials" aria-label="Social links">
        {socials.map((item) => (
          <a key={item.label} href={item.url} className="social-chip" target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}