import type { LinkItem } from '../../types';
import './Chips.css';

export function Chips({ links, center = false }: { links: LinkItem[]; center?: boolean }) {
  return (
    <div className={`chips${center ? ' chips-center' : ''}`}>
      {links.map((l) => (
        <a key={l.href} className="chip" href={l.href} target="_blank" rel="noopener noreferrer">
          {l.label}
        </a>
      ))}
    </div>
  );
}
