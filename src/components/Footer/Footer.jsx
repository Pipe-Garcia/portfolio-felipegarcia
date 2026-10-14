import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

export function Footer({ content, links }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p>Felipe Garcia · 2026</p>
          <span>{content.role}</span>
        </div>
        <nav aria-label="Social">
          <a href={links.github.href} target="_blank" rel="noopener noreferrer">
            <Icon name="github" />
            GitHub
          </a>
          <a
            href={links.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" />
            LinkedIn
          </a>
          <a href={links.email.href}>
            <Icon name="email" />
            Email
          </a>
        </nav>
        <Link className="footer-top" to="/#hero" aria-label={content.top}>
          ↑
        </Link>
      </div>
    </footer>
  );
}
