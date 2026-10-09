import { talks } from '../../data/talks';
import { Section } from '../ui/Section';
import './Talks.css';

export function Talks() {
  return (
    <Section
      id="community"
      kicker="come say hi at the next one"
      title="Community & talks"
      intro="I love talking about open source and protocol research, whether it's a town hall, a hackathon or a podcast."
    >
      <ul className="talks">
        {talks.map((t) => (
          <li key={t.title}>
            {t.href ? (
              <a href={t.href} target="_blank" rel="noopener noreferrer">
                {t.title}
              </a>
            ) : (
              <b>{t.title}</b>
            )}
            <span>{t.venue}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
