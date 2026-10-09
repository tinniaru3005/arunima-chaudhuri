import { hobbies } from '../../data/hobbies';
import { HobbyIconSvg } from '../icons/HobbyIcons';
import { Section } from '../ui/Section';
import './OffTheClock.css';

export function OffTheClock() {
  return (
    <Section
      id="offclock"
      kicker="when the laptop's closed"
      title="Off the clock"
      className="offclock"
      intro="Turns out I like discovering things offline too: new cafés, new streets, new cats to befriend."
    >
      <div className="stickers">
        {hobbies.map((h) => (
          <div key={h.title} className="sticker">
            <HobbyIconSvg name={h.icon} />
            <h3>{h.title}</h3>
            <p>{h.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
