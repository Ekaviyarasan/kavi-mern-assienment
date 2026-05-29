const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
const socials = [
  { label: 'in', url: 'https://linkedin.com/' },
  { label: 'gh', url: 'https://github.com/' },
  { label: 'mail', url: 'mailto:kaviyarasan7778@email.com' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">© 2026 Kaviyarasan | MERN Stack Learner</p>

      <div className="footer-links">
        {footerLinks.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </div>

      <div className="footer-socials" aria-label="Social links">
        {socials.map((item) => (
          <a key={item.label} href={item.url} className="social-chip" target="_blank" rel="noopener noreferrer">{item.label}</a>
        ))}
      </div>
    </footer>
  );
}
