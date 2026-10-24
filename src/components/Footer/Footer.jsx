import { Link } from 'react-router-dom';

export function Footer({ content, links }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-signature">
          <p>Felipe Garcia · 2026</p>
          <span>{content.role}</span>
        </div>
        <Link className="footer-top" to="/#hero" aria-label={content.top}>
          ↑
        </Link>
      </div>
    </footer>
  );
}
