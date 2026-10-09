import { leadership } from '../../data/leadership';
import { Section } from '../ui/Section';
import { Tile } from '../ui/Tile';

export function Leadership() {
  return (
    <Section id="leadership" kicker="helping other people get started" title="Leadership & mentorship">
      <div className="grid2">
        {leadership.map((r) => (
          <Tile key={r.role + r.org}>
            <div className="tile-top">
              <h3>
                {r.role} <span className="org">· {r.org}</span>
              </h3>
              <span className="when">{r.when}</span>
            </div>
            <p>{r.body}</p>
            {r.links && (
              <p className="tile-links">
                {r.links.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 && ' · '}
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </Tile>
        ))}
      </div>
    </Section>
  );
}
