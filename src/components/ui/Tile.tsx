import type { ReactNode } from 'react';
import type { CardItem } from '../../types';
import './Tile.css';

/** A linked card: title, optional blurb, tag and call to action. */
export function LinkTile({ item }: { item: CardItem }) {
  return (
    <a className="tile tile-link" href={item.href} target="_blank" rel="noopener noreferrer">
      <h3>{item.title}</h3>
      {item.body && <p>{item.body}</p>}
      <div className="tile-meta">
        <span className="tag">{item.tag}</span>
        <span className="tile-cta">{item.cta} →</span>
      </div>
    </a>
  );
}

/** A plain card for content that holds its own links. */
export function Tile({ children }: { children: ReactNode }) {
  return <div className="tile">{children}</div>;
}
