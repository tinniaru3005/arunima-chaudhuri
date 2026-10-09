import type { ReactNode } from 'react';
import './Section.css';

interface Props {
  id: string;
  kicker: string;
  title: string;
  intro?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** A page section with the handwritten kicker + big heading pattern. */
export function Section({ id, kicker, title, intro, className = '', children }: Props) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="section-head">
        <span className="section-kicker">{kicker}</span>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
