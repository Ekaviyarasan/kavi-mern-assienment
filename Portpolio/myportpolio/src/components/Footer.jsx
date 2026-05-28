const footerLinks = ['Terms', 'Supports', 'Privacy', 'Cookie'];
const socials = ['IG', 'X', 'LI'];

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">© 2026 Freaky. All rights reserved.</p>

      <div className="footer-links">
        {footerLinks.map((item) => (
          <a key={item} href="#home">{item}</a>
        ))}
      </div>

      <div className="footer-socials" aria-label="Social links">
        {socials.map((item) => (
          <a key={item} href="#home" className="social-chip">{item}</a>
        ))}
      </div>
    </footer>
  );
}
