import { achievements } from '../../data/achievements';
import { Star } from '../icons/Star';
import { RichText } from '../ui/RichText';
import { Section } from '../ui/Section';
import './Achievements.css';

export function Achievements() {
  return (
    <Section id="achievements" kicker="a few proud moments" title="Achievements">
      <div className="awards">
        {achievements.map((a) => (
          <div key={a.title} className="award">
            <Star className="award-star" />
            <div>
              <b>{a.title}</b>
              <span>
                <RichText parts={a.detail} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
