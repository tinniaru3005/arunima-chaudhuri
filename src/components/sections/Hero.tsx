import photo from '../../assets/arunima.jpg';
import { now } from '../../data/now';
import { profile, socials } from '../../data/profile';
import { Chips } from '../ui/Chips';
import { CopyEmail } from '../ui/CopyEmail';
import './Hero.css';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-text">
        <p className="hero-hello">hi there, I'm</p>
        <h1>
          {profile.name}, and I build the <span className="hl">plumbing</span> that helps machines find and trust each
          other.
        </h1>
        <p className="hero-lede">
          I spent the last few years deep in <em>Ethereum's peer-to-peer layer</em>: how nodes discover one another,
          how data gets sampled and gossiped across thousands of peers. Now I'm founder of{' '}
          <a href={now.companyHref} target="_blank" rel="noopener noreferrer">
            {now.company}
          </a>
          , building open-source security for <em>AI agents</em> heading into production.
        </p>
        <Chips links={socials} />
        <CopyEmail email={profile.email} />
      </div>

      <div className="polaroid-wrap">
        <figure className="polaroid">
          <span className="tape" aria-hidden="true" />
          <img src={photo} alt="Arunima smiling, long dark hair, white top, in front of a wooden door" />
          <figcaption>{profile.photoCaption}</figcaption>
        </figure>
        <div className="sticky-note">{profile.photoNote}</div>
      </div>
    </header>
  );
}
