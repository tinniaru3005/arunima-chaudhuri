import { useState } from 'react';
import { catLines } from '../../data/hobbies';
import { profile, socials } from '../../data/profile';
import { Chips } from '../ui/Chips';
import './Footer.css';

export function Footer() {
  const [pets, setPets] = useState(0);
  const line = pets > 0 ? catLines[(pets - 1) % catLines.length] + (pets > 1 ? `  (${pets} pets)` : '') : '';

  return (
    <footer className="footer">
      <button className="cat-btn" type="button" aria-label="Pet the cat" onClick={() => setPets((n) => n + 1)}>
        <svg viewBox="0 0 96 80" aria-hidden="true">
          <path className="cat-tail" d="M66 62c14 0 22-8 20-20" fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="46" cy="58" rx="24" ry="18" fill="var(--ink)" />
          <g className="cat-ears">
            <path d="M28 30l-4-16 12 8zM56 30l4-16-12 8z" fill="var(--ink)" />
          </g>
          <circle cx="42" cy="34" r="16" fill="var(--ink)" />
          <circle cx="36" cy="33" r="2.6" fill="var(--sun)" />
          <circle cx="48" cy="33" r="2.6" fill="var(--sun)" />
          <path d="M40 39h4l-2 2z" fill="var(--berry)" />
        </svg>
        <span className="small">pet the cat</span>
      </button>
      <p className="mrrp" aria-live="polite">
        {line}
      </p>
      <h2>Let's talk.</h2>
      <p>
        About P2P networks, agent security, mentoring, or a café I really need to try. My inbox is open:{' '}
        <code>{profile.email}</code>
      </p>
      <Chips links={socials} center />
      <p className="small">Made with chai, curiosity and at least one cat nearby.</p>
    </footer>
  );
}
