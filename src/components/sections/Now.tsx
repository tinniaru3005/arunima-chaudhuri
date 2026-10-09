import { now } from '../../data/now';
import { Section } from '../ui/Section';
import './Now.css';

export function Now() {
  return (
    <Section id="now" kicker="what I'm up to right now" title={`Building ${now.company}`}>
      <div className="now">
        <div className="now-intro">
          <span className="now-badge">{now.badge}</span>
          <h3>{now.title}</h3>
          <p>{now.body}</p>
          <p>
            <a href={now.companyHref} target="_blank" rel="noopener noreferrer">
              See everything on GitHub →
            </a>
          </p>
        </div>
        <div className="now-projects">
          {now.projects.map((p) => (
            <a key={p.href} className="now-project" href={p.href} target="_blank" rel="noopener noreferrer">
              <strong>{p.title} →</strong>
              <span>{p.body}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
