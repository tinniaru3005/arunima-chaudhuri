import { education } from '../../data/education';
import { Section } from '../ui/Section';
import { Tile } from '../ui/Tile';

export function Education() {
  return (
    <Section id="education" kicker="where I learned the fundamentals" title="Education">
      <div className="grid2">
        {education.map((d) => (
          <Tile key={d.degree}>
            <div className="tile-top">
              <h3>{d.degree}</h3>
              <span className="when">{d.when}</span>
            </div>
            <p>{d.school}</p>
            <div className="tile-meta">
              <span className="tag">{d.score}</span>
            </div>
          </Tile>
        ))}
      </div>
    </Section>
  );
}
