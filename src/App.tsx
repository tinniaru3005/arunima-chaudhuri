import { Achievements } from './components/sections/Achievements';
import { Builds } from './components/sections/Builds';
import { Education } from './components/sections/Education';
import { Footer } from './components/sections/Footer';
import { Hero } from './components/sections/Hero';
import { Leadership } from './components/sections/Leadership';
import { Nav } from './components/sections/Nav';
import { Now } from './components/sections/Now';
import { OffTheClock } from './components/sections/OffTheClock';
import { Research } from './components/sections/Research';
import { Talks } from './components/sections/Talks';
import { Work } from './components/sections/Work';
import { Writing } from './components/sections/Writing';

export default function App() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <Now />
      <Work />
      <Research />
      <Builds />
      <Writing />
      <Leadership />
      <Talks />
      <Achievements />
      <Education />
      <OffTheClock />
      <Footer />
    </div>
  );
}
