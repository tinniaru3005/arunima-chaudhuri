import { builds } from '../../data/builds';
import { Section } from '../ui/Section';
import { LinkTile } from '../ui/Tile';

export function Builds() {
  return (
    <Section id="builds" kicker="things I've made" title="Builds">
      <div className="grid3">
        {builds.map((b) => (
          <LinkTile key={b.href} item={b} />
        ))}
      </div>
    </Section>
  );
}
