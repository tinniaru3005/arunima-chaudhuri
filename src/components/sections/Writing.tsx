import { hashnodeProfile, posts } from '../../data/writing';
import { Section } from '../ui/Section';
import { LinkTile } from '../ui/Tile';

export function Writing() {
  return (
    <Section
      id="writing"
      kicker="I write things down too"
      title="Writing"
      intro={
        <>
          Lately it's mostly about AI agents and what they get up to when nobody's watching. All 17 posts are on{' '}
          <a href={hashnodeProfile} target="_blank" rel="noopener noreferrer">
            Hashnode
          </a>
          .
        </>
      }
    >
      <div className="grid3">
        {posts.map((p) => (
          <LinkTile key={p.href} item={p} />
        ))}
      </div>
    </Section>
  );
}
