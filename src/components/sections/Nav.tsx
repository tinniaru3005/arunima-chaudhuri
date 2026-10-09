import { navLinks } from '../../data/profile';
import './Nav.css';

export function Nav() {
  return (
    <nav className="nav" id="top">
      <a className="nav-logo" href="#top">
        arunima<span>.</span>
      </a>
      <ul>
        {navLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
