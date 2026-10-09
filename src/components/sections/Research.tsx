import { papers, researchIntro } from '../../data/research';
import { Section } from '../ui/Section';
import { LinkTile } from '../ui/Tile';

export function Research() {
  return (
    <Section id="research" kicker="papers, first-authored" title="Research" intro={researchIntro}>
      <div className="grid2">
        {papers.map((p) => (
          <LinkTile key={p.href} item={p} />
        ))}
      </div>
    </Section>
  );
}
